/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import {
  Live2DCubismFramework as live2dcubismframework,
  Option as Csm_Option
} from '@framework/live2dcubismframework';
import Csm_CubismFramework = live2dcubismframework.CubismFramework;
import { LAppView } from './lappview';
import { LAppPal } from './lapppal';
import { LAppTextureManager } from './lapptexturemanager';
import { LAppLive2DManager } from './lapplive2dmanager';
import * as LAppDefine from './lappdefine';

export let canvas: HTMLCanvasElement = null;
export let s_instance: LAppDelegate = null;
export let gl: WebGLRenderingContext = null;
export let frameBuffer: WebGLFramebuffer = null;

/**
 * アプリケーションクラス。
 * Cubism SDKの管理を行う。
 */
export class LAppDelegate {
  /**
   * クラスのインスタンス（シングルトン）を返す。
   * インスタンスが生成されていない場合は内部でインスタンスを生成する。
   *
   * @return クラスのインスタンス
   */
  public static getInstance(): LAppDelegate {
    if (s_instance == null) {
      s_instance = new LAppDelegate();
    }

    return s_instance;
  }

  /**
   * クラスのインスタンス（シングルトン）を解放する。
   */
  public static releaseInstance(): void {
    if (s_instance != null) {
      s_instance.release();
    }

    s_instance = null;
  }

  /**
   * APPに必要な物を初期化する。
   */
  public initialize(): boolean {
    // キャンバスの作成 -> 创建画布
    canvas = document.createElement('canvas');
    canvas.width = LAppDefine.RenderTargetWidth;
    canvas.height = LAppDefine.RenderTargetHeight;

     // 原来是用js动态在网页上创建画布，画布的长宽在lappdefine.ts指定，现在直接在html中已经有了画布直接拿过来使用就行
    var live2d_div = LAppDefine.ViewEl; // index.html中的id为live2d的画布

    // glコンテキストを初期化 -> 初始化gl上下文
    // @ts-ignore
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      alert('Cannot initialize WebGL. This browser does not support.');
      gl = null;

      document.body.innerHTML =
        'This browser does not support the <code>&lt;canvas&gt;</code> element.';

      // gl初期化失敗
      return false;
    }

    // キャンバスを DOM に追加 -> 向DOM添加画布
    // document.body.appendChild(canvas);
    live2d_div.appendChild(canvas)

    if (!frameBuffer) {
      frameBuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    }

    // 透過設定 -> 透明设置
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const supportTouch: boolean = 'ontouchend' in canvas;
    if (supportTouch) {
      // タッチ関連コールバック関数登録 -> 注册触摸相关的回掉函数  （触摸屏）
      canvas.ontouchstart = onTouchBegan;
      canvas.ontouchmove = onTouchMoved;
      canvas.ontouchend = onTouchEnded;
      canvas.ontouchcancel = onTouchCancel;
    } else {
      // マウス関連コールバック関数登録 -> 注册鼠标相关的回呼函数
      canvas.onmousedown = onClickBegan;
      // canvas.onmousemove = onMouseMoved;   //原来是在画布上注册鼠标移动事件，鼠标移出画布就监听不到
      window.onmousemove = onMouseMoved;
      canvas.onmouseup = onClickEnded;
    }

    // AppViewの初期化 -> AppView的初始化
    this._view.initialize();

    // Cubism SDKの初期化 -> Cubism SDK的初始化
    this.initializeCubism();

    this._view.initializeSprite();

    return true;
  }

  /**
   * 解放する。
   */
  public release(): void {
    this._textureManager.release();
    this._textureManager = null;

    this._view.release();
    this._view = null;

    // リソースを解放
    LAppLive2DManager.releaseInstance();

    // Cubism SDKの解放
    Csm_CubismFramework.dispose();
  }

  /**
   * 実行処理。
   */
  public run(): void {
    // メインループ -> 主循环
    const loop = (): void => {
      // インスタンスの有無の確認 -> 确认有无实例
      if (s_instance == null) {
        return;
      }

      // 時間更新 -> 更新时间
      LAppPal.updateTime();

      // 画面の初期化 -> 画面的初始化
      gl.clearColor(0.0, 0.0, 0.0, 0.0);

      // 深度テストを有効化 -> 启动深度测试
      gl.enable(gl.DEPTH_TEST);

      // 近くにある物体は、遠くにある物体を覆い隠す -> 附近的物体将远处的物体遮盖起来
      gl.depthFunc(gl.LEQUAL);

      // カラーバッファや深度バッファをクリアする -> 清除彩色缓冲区和深度缓冲区  （加上这一句会导致有些浏览器背景变成黑色，而不是透明）
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      gl.clearDepth(1.0);

      // 透過設定 -> 透明设置
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      // 描画更新 -> 绘图更新
      this._view.render();

      // ループのために再帰呼び出し -> 循环递归调用
      requestAnimationFrame(loop);
    };
    loop();
  }

  /**
   * シェーダーを登録する。
   */
  public createShader(): WebGLProgram {
    // バーテックスシェーダーのコンパイル
    const vertexShaderId = gl.createShader(gl.VERTEX_SHADER);

    if (vertexShaderId == null) {
      LAppPal.printMessage('failed to create vertexShader');
      return null;
    }

    const vertexShader: string =
      'precision mediump float;' +
      'attribute vec3 position;' +
      'attribute vec2 uv;' +
      'varying vec2 vuv;' +
      'void main(void)' +
      '{' +
      '   gl_Position = vec4(position, 1.0);' +
      '   vuv = uv;' +
      '}';

    gl.shaderSource(vertexShaderId, vertexShader);
    gl.compileShader(vertexShaderId);

    // フラグメントシェーダのコンパイル
    const fragmentShaderId = gl.createShader(gl.FRAGMENT_SHADER);

    if (fragmentShaderId == null) {
      LAppPal.printMessage('failed to create fragmentShader');
      return null;
    }

    const fragmentShader: string =
      'precision mediump float;' +
      'varying vec2 vuv;' +
      'uniform sampler2D texture;' +
      'void main(void)' +
      '{' +
      '   gl_FragColor = texture2D(texture, vuv);' +
      '}';

    gl.shaderSource(fragmentShaderId, fragmentShader);
    gl.compileShader(fragmentShaderId);

    // プログラムオブジェクトの作成
    const programId = gl.createProgram();
    gl.attachShader(programId, vertexShaderId);
    gl.attachShader(programId, fragmentShaderId);

    gl.deleteShader(vertexShaderId);
    gl.deleteShader(fragmentShaderId);

    // リンク
    gl.linkProgram(programId);

    gl.useProgram(programId);

    return programId;
  }

  /**
   * View情報を取得する。
   */
  public getView(): LAppView {
    return this._view;
  }

  public getTextureManager(): LAppTextureManager {
    return this._textureManager;
  }

  /**
   * コンストラクタ
   */
  constructor() {
    this._captured = false;
    this._mouseX = 0.0;
    this._mouseY = 0.0;
    this._isEnd = false;

    this._cubismOption = new Csm_Option();
    this._view = new LAppView();
    this._textureManager = new LAppTextureManager();
  }

  /**
   * Cubism SDKの初期化
   */
  public initializeCubism(): void {
    // setup cubism
    this._cubismOption.logFunction = LAppPal.printMessage; //初始化控制台打印信息工具，就是console.log
    this._cubismOption.loggingLevel = LAppDefine.CubismLoggingLevel; //指定打印日志的等级
    Csm_CubismFramework.startUp(this._cubismOption);

    // initialize cubism -> 初始化设置cubism
    Csm_CubismFramework.initialize();

    // load model -> 加载模型
    LAppLive2DManager.getInstance();

    // 更新时间
    LAppPal.updateTime();

    this._view.initializeSprite();
  }

  _cubismOption: Csm_Option; // Cubism SDK Option
  _view: LAppView; // View情報
  _captured: boolean; // クリックしているか
  _mouseX: number; // マウスX座標
  _mouseY: number; // マウスY座標
  _isEnd: boolean; // APP終了しているか
  _textureManager: LAppTextureManager; // テクスチャマネージャー
}

/**
 * クリックしたときに呼ばれる。
 */
function onClickBegan(e: MouseEvent): void {
  if (!LAppDelegate.getInstance()._view) {
    LAppPal.printMessage('view notfound');
    return;
  }
  LAppDelegate.getInstance()._captured = true;

  const posX: number = e.pageX;
  const posY: number = e.pageY;

  LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}

/**
 * マウスポインタが動いたら呼ばれる。
 */
function onMouseMoved(e: MouseEvent): void {
  // if (!LAppDelegate.getInstance()._captured) { // 判断是否单击，原来是要按住鼠标左键图像才会跟着鼠标动
  //   return;
  // }

  if (!LAppDelegate.getInstance()._view) { //获得lappview.ts的实例对象
    LAppPal.printMessage('view notfound');
    return;
  }

  // e.clientX和e.clientY获取的坐标点都是以左上角为原点
  const rect = (e.target as Element).getBoundingClientRect();
  // const posX: number = e.clientX - rect.left;
  // const posY: number = e.clientY - rect.top;
  let posX: number = e.clientX;
  let posY: number = e.clientY - window.innerHeight + canvas.height;

  // 图像在网页的坐下角，简单处理坐标将超过画布边界坐标就等与边界坐标
  posX = (posX > canvas.width) ? canvas.width : posX;
  posY = (posY < 0) ? 0 : posY;

  LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}

/**
 * クリックが終了したら呼ばれる。
 */
function onClickEnded(e: MouseEvent): void {
  LAppDelegate.getInstance()._captured = false;
  if (!LAppDelegate.getInstance()._view) {
    LAppPal.printMessage('view notfound');
    return;
  }

  const rect = (e.target as Element).getBoundingClientRect();
  const posX: number = e.clientX - rect.left;
  const posY: number = e.clientY - rect.top;

  LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}

/**
 * タッチしたときに呼ばれる。
 */
function onTouchBegan(e: TouchEvent): void {
  if (!LAppDelegate.getInstance()._view) {
    LAppPal.printMessage('view notfound');
    return;
  }

  LAppDelegate.getInstance()._captured = true;

  const posX = e.changedTouches[0].pageX;
  const posY = e.changedTouches[0].pageY;

  LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}

/**
 * スワイプすると呼ばれる。
 */
function onTouchMoved(e: TouchEvent): void {
  if (!LAppDelegate.getInstance()._captured) {
    return;
  }

  if (!LAppDelegate.getInstance()._view) {
    LAppPal.printMessage('view notfound');
    return;
  }

  const rect = (e.target as Element).getBoundingClientRect();

  const posX = e.changedTouches[0].clientX - rect.left;
  const posY = e.changedTouches[0].clientY - rect.top;

  LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}

/**
 * タッチが終了したら呼ばれる。
 */
function onTouchEnded(e: TouchEvent): void {
  LAppDelegate.getInstance()._captured = false;

  if (!LAppDelegate.getInstance()._view) {
    LAppPal.printMessage('view notfound');
    return;
  }

  const rect = (e.target as Element).getBoundingClientRect();

  const posX = e.changedTouches[0].clientX - rect.left;
  const posY = e.changedTouches[0].clientY - rect.top;

  LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}

/**
 * タッチがキャンセルされると呼ばれる。
 */
function onTouchCancel(e: TouchEvent): void {
  LAppDelegate.getInstance()._captured = false;

  if (!LAppDelegate.getInstance()._view) {
    LAppPal.printMessage('view notfound');
    return;
  }

  const rect = (e.target as Element).getBoundingClientRect();

  const posX = e.changedTouches[0].clientX - rect.left;
  const posY = e.changedTouches[0].clientY - rect.top;

  LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}

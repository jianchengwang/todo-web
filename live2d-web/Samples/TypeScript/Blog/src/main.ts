/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import { LAppLive2DManager } from './lapplive2dmanager';
import * as LAppDefine from './lappdefine';

export const win: any = window
win.L2dViewer = class L2dViewer {
  constructor(config: {el, modelHomePath: string, modelName: string, bgImg: string, width: number, height: number}) {
     // 初始化默认全局变量
    LAppDefine.initDefine(config.el, config.modelHomePath, config.modelName, config.bgImg, config.width, config.height);
    win.onbeforeunload = (): void => LAppDelegate.releaseInstance();
    // create the application instance
    if (LAppDelegate.getInstance().initialize() == false) {
      return;
    }
    LAppDelegate.getInstance().run();
  }

  public loadModel(modelName: string) {
    const live2DManager: LAppLive2DManager = LAppLive2DManager.getInstance();
    let modelIndex = 0;
    if(LAppDefine.ModelDir.indexOf(modelName) == -1) {
      LAppDefine.ModelDir.push(modelName);    
      modelIndex = LAppDefine.ModelDir.length - 1;
    }
    live2DManager.changeScene(modelIndex);
  }
}

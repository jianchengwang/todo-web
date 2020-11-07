/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import { LAppLive2DManager } from './lapplive2dmanager';
import * as LAppDefine from './lappdefine';
import { LAppModel } from './lappmodel';

export const win: any = LAppDefine.win
win.L2dViewer = class L2dViewer {
  constructor(config: {
                el, 
                modelHomePath: string, model: string, 
                bgImg: string, 
                width: number, height: number, 
                autoMotion: boolean, 
                _finishedLoadModel:Function, _onTab: Function
              }) 
  {
    win._finishedLoadModel = config._finishedLoadModel;
    win._onTab = config._onTab;
     // 初始化默认全局变量
    LAppDefine.initDefine(config.el, config.modelHomePath, config.model, config.bgImg, config.width, config.height, config.autoMotion);
    win.onbeforeunload = (): void => LAppDelegate.releaseInstance();
    // create the application instance
    if (LAppDelegate.getInstance().initialize() == false) {
      return;
    }
    LAppDelegate.getInstance().run();
  }

  public getModel(): LAppModel {
    const live2DManager: LAppLive2DManager = LAppLive2DManager.getInstance();
    for (let i = 0; i < live2DManager._models.getSize(); i++) {
      const model: LAppModel = live2DManager.getModel(i);
      if(model) {
        return model;
      }
    }
    return null;
  }

  public loadModel(modelName: string) {
    const live2DManager: LAppLive2DManager = LAppLive2DManager.getInstance();
    let modelIndex = LAppDefine.ModelDir.indexOf(modelName);
    if(modelIndex == -1) {
      LAppDefine.ModelDir.push(modelName);    
      modelIndex = LAppDefine.ModelDir.length - 1;
    }
    live2DManager.changeScene(modelIndex);
  }

  public startMotion(motionName: string) {
      const model: LAppModel = this.getModel();
      if (model && model._motion_map.has(motionName)) {
        let motionKey = model._motion_map.get(motionName)
        let group = motionKey.split('_')[0];
        let no = motionKey.split('_')[1];
        model.startMotion(group, no, 1, null);
      } 
  }

  public getMotions(): Map<any,any> {
    const model: LAppModel = this.getModel();
    if (model) {
      return model._motion_map
    }
    return null;
  }
}

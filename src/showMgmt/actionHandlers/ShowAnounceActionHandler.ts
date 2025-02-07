import { ShowActionManager } from "../manageShowActions"
import { ActionParams, ShowActionSupportArgs } from "./showActionHandler"
import { ShowActionHandlerSupport } from "./ShowActionHandlerSupport"
import { actionStartsWith } from "./utils"
import * as ui from 'dcl-ui-toolkit'

export type ActionHandlerAnouncementParams = {
  text: string
  duration?: number
  color?: string
  fontSize?: number
}

export class ShowAnounceActionHandler extends ShowActionHandlerSupport<ActionHandlerAnouncementParams>{
  public static DEFAULT_NAME = 'ANNOUNCE'
  constructor(args?: ShowActionSupportArgs<ActionHandlerAnouncementParams>) {
    super(ShowAnounceActionHandler.DEFAULT_NAME, args)
  }

  matches(action: string, showActionMgr: ShowActionManager): boolean {
    //log('CUSTOM matches SAY fired',action)
    return actionStartsWith(action, this.name, 0, " ")
  }

  process(action: ActionParams<ActionHandlerAnouncementParams>, showActionMgr: ShowActionManager): void {
    ui.createComponent(ui.Announcement, { value: action.params.text, duration: action.params.duration, size: action.params.fontSize, startHidden: false })
  }
}

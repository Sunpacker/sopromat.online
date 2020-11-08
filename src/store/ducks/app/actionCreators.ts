import { Action } from 'redux'
import { IApp, IObject } from './state'


export enum AppActionsTypes {
	SET_ACTION = 'app/SET_ACTION',
	PUSH_HISTORY_ITEM = 'app/PUSH_HISTORY_ITEM',
	REMOVE_HISTORY_ITEM = 'app/REMOVE_HISTORY_ITEM',
}


export interface ISetAppAction extends Action<AppActionsTypes> {
	type: AppActionsTypes.SET_ACTION
	payload: IApp['currentAction']
}
export interface IPushHistoryItemAction extends Action<AppActionsTypes> {
	type: AppActionsTypes.PUSH_HISTORY_ITEM
	payload: IObject
}
export interface IRemoveHistoryItemAction extends Action<AppActionsTypes> {
	type: AppActionsTypes.REMOVE_HISTORY_ITEM
	payload: string
}

export const setAction = (payload: ISetAppAction['payload']): ISetAppAction => ({
	type: AppActionsTypes.SET_ACTION,
	payload
})
export const pushHistoryItem = (payload: IPushHistoryItemAction['payload']): IPushHistoryItemAction => ({
	type: AppActionsTypes.PUSH_HISTORY_ITEM,
	payload
})
export const removeHistoryItem = (payload: IRemoveHistoryItemAction['payload']): IRemoveHistoryItemAction => ({
	type: AppActionsTypes.REMOVE_HISTORY_ITEM,
	payload
})


export type AppActions = ISetAppAction | IPushHistoryItemAction | IRemoveHistoryItemAction

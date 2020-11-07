import { Action } from 'redux'
import { IApp } from './state'


export enum AppActionsTypes {
	SET_ACTION = 'app/SET_ACTION',
	SET_CURSOR = 'app/SET_CURSOR',
}

export interface ISetAppAction extends Action<AppActionsTypes> {
	type: AppActionsTypes.SET_ACTION
	payload: IApp['currentAction']
}

export const setAction = (payload: ISetAppAction['payload']): ISetAppAction => ({
	type: AppActionsTypes.SET_ACTION,
	payload
})


export type AppActions = ISetAppAction

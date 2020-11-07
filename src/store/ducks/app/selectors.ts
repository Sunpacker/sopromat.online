import { RootState } from '../..'
import { IApp } from './state'

export const selectCurrentAction = (state: RootState): IApp['currentAction'] => state.app.currentAction
export const selectTip= (state: RootState): IApp['tip'] => state.app.tip

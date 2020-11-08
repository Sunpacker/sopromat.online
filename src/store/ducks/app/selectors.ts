import { RootState } from '../..'
import { IApp } from './state'

export const selectCurrentAction = (state: RootState): IApp['currentAction'] => state.app.currentAction
export const selectHistory = (state: RootState): IApp['history'] => state.app.history
export const selectTip = (state: RootState): IApp['tip'] => state.app.tip

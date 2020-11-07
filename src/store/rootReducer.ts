import { combineReducers } from 'redux'
import appReducer from './ducks/app/reducer'

export const rootReducer = combineReducers({
	app: appReducer
})

import produce, { Draft } from 'immer'
import { consoleLog } from '../../../components/app/utils'
import { AppActions, AppActionsTypes } from './actionCreators'
import { Actions, IApp } from './state'


const appInitial: IApp = {
	history: [],
	currentAction: Actions.SELECT,
	tip: '<h3>Выбрать</h3> <p>Редактирование элемента.</p>'
}

const appReducer = produce((draft: Draft<IApp>, action: AppActions) => {
	switch(action.type) {
		case AppActionsTypes.SET_ACTION:
			draft.currentAction = action.payload

			switch (draft.currentAction) {
				case Actions.SELECT:
					draft.tip = `
						<h3>Выбрать</h3>
						<p>Редактирование элемента.</p>
					`
					break
				case Actions.NODE:
					draft.tip = `
						<h3>Узел</h3>
						<p>Щелкните в любом месте, чтобы установить узел.</p>
					`
					break
				case Actions.ROD:
					draft.tip = `
						<h3>Стержень</h3>
						<p>Чтобы разместить стержень, необходимо выбрать 2 узла, между которыми он будет находиться.</p>
					`
					break
				case Actions.SUPPORT_1:
					draft.tip = `
						<h3>Шарнирная подвижная опора</h3>
						<p>Имеет две степени свободы: перемещение от воздействия горизонтальных сил и от вращающих сил, крутящих моментов.</p>
					`
					break
				case Actions.SUPPORT_2:
					draft.tip = `
						<h3>Шарнирная неподвижная опора</h3>
						<p>Имеет одну степень свободы: перемещение от вращающих сил, крутящих моментов.</p>
					`
					break
				case Actions.SUPPORT_3:
					draft.tip = `
						<h3>Жесткая заделка</h3>
						<p>Не имеет степеней свободы, препятствует всем перемещениям.</p>
					`
					break
				case Actions.FORCE:
					draft.tip = `
						<h3>Сила</h3>
						<p>Указывается точка приложения сосредоточенной силы на стержне.</p>
					`
					break
				case Actions.LOAD:
					draft.tip = `
						<h3>Нагрузка</h3>
						<p>Указываются начальная и конечная точки нагрузки на стержне.</p>
					`
					break
			
				default:
					break
			}
			consoleLog(`action setted: %c${action.payload}`)
			break

		case AppActionsTypes.PUSH_HISTORY_ITEM:
			draft.history = [ ...draft.history, action.payload ]
			consoleLog(`objects history has increased by: %c${action.payload.type}`)
			break

		case AppActionsTypes.REMOVE_HISTORY_ITEM:
			draft.history.splice(draft.history.findIndex(object => object.id === action.payload), 1)
			consoleLog(`objects history has decreased by %c${action.payload}`)
			break

		default:
			break
	}
}, appInitial)


export default appReducer

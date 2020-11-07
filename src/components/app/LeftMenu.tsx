import { current } from 'immer'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'

import { setAction } from '../../store/ducks/app/actionCreators'
import { selectCurrentAction } from '../../store/ducks/app/selectors'
import { Actions } from './../../store/ducks/app/state'
import {
	Select as SelectIcon,
	Node as NodeIcon,
	Rod as RodIcon,
	SupportOne as SupportOneIcon,
	SupportTwo as SupportTwoIcon,
	SupportThree as SupportThreeIcon,
	Force as ForceIcon,
	Load as LoadIcon,
} from './icons'


const LeftMenu: React.FC = (): React.ReactElement => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState<boolean>(true)
	const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false)
	const currentAction = useSelector(selectCurrentAction)
	// const [currentCursor, setCurrentCursor] = React.useState<any>(SelectIcon)

	const toggleSubMenuVisible = (): void => setSubMenuVisible(!subMenuVisible)
	
// 	useEffect(() => {
// 		function cursorMove(e: MouseEvent): void {
// 			const x = e.clientX
// 			const y = e.clientY

// 			document.getElementsByTagName('body')[0].style.cursor = 'none'
// console.log(currentCursor)
// 			if(currentCursor) {
// 				currentCursor.style.left = x + 'px'
// 				currentCursor.style.top = y + 'px'
// 			}
// 		}

// 		document.addEventListener('mousemove', cursorMove)
// 		return () => document.removeEventListener('mousemove', cursorMove)
// 	}, [])

	function pickAction(action: string): void {
		if(currentAction !== action) {
			switch (action) {
				case Actions.SELECT:
					dispatch(setAction(Actions.SELECT))
					// setCurrentCursor(SelectIcon)
					break
				case Actions.NODE:
					dispatch(setAction(Actions.NODE))
					// setCurrentCursor(NodeIcon)
					break
				case Actions.ROD:
					dispatch(setAction(Actions.ROD))
					// setCurrentCursor(RodIcon)
					break
				case Actions.SUPPORT_1:
					dispatch(setAction(Actions.SUPPORT_1))
					// setCurrentCursor(SupportOneIcon)
					break
				case Actions.SUPPORT_2:
					dispatch(setAction(Actions.SUPPORT_2))
					// setCurrentCursor(SupportTwoIcon)
					break
				case Actions.SUPPORT_3:
					dispatch(setAction(Actions.SUPPORT_3))
					// setCurrentCursor(SupportThreeIcon)
					break
				case Actions.FORCE:
					dispatch(setAction(Actions.FORCE))
					// setCurrentCursor(ForceIcon)
					break
				case Actions.LOAD:
					dispatch(setAction(Actions.LOAD))
					// setCurrentCursor(LoadIcon)
					break
			
				default:
					dispatch(setAction(Actions.SELECT))
					break
			}
		}
	}

	useEffect(() => {
		setLoading(false)
	}, [])

	return (
		<>
			{loading ? null : <ReactTooltip id="svgTooltip" className="tooltip" backgroundColor="white" textColor="#212121" />}
			
			<div className="menu menu-left">
				<div onClick={() => pickAction('SELECT')} className={`menu-icon ${currentAction === Actions.SELECT ? 'active' : ''}`} data-tip="Выбрать" data-for="svgTooltip">
					<SelectIcon />
				</div>
				<div onClick={() => pickAction('NODE')} className={`menu-icon ${currentAction === Actions.NODE ? 'active' : ''}`} data-tip="Узел" data-for="svgTooltip">
					<NodeIcon />
				</div>
				<div onClick={() => pickAction('ROD')} className={`menu-icon ${currentAction === Actions.ROD ? 'active' : ''}`} data-tip="Стержень" data-for="svgTooltip">
					<RodIcon />
				</div>
				<div onClick={() => toggleSubMenuVisible()} className={`menu-icon ${subMenuVisible ? 'active' : ''}`} data-tip="Опора" data-for="svgTooltip">
					<SupportTwoIcon />
				</div>
				<div onClick={() => pickAction('FORCE')} className={`menu-icon ${currentAction === Actions.FORCE ? 'active' : ''}`} data-tip="Сила" data-for="svgTooltip">
					<ForceIcon />
				</div>
				<div onClick={() => pickAction('LOAD')} className={`menu-icon ${currentAction === Actions.LOAD ? 'active' : ''}`} data-tip="Нагрузка" data-for="svgTooltip">
					<LoadIcon />
				</div>
			</div>

			<div className={`menu menu-left sub ${subMenuVisible ? 'visible' : ''}`}>
				<div onClick={() => { pickAction('SUPPORT_1'); setSubMenuVisible(!subMenuVisible) }} className={`menu-icon ${currentAction === Actions.SUPPORT_1 ? 'active' : ''}`} data-tip="Шарнирная подвижная" data-for="svgTooltip">
					<SupportOneIcon />
				</div>
				<div onClick={() => { pickAction('SUPPORT_2'); setSubMenuVisible(!subMenuVisible) }} className={`menu-icon ${currentAction === Actions.SUPPORT_2 ? 'active' : ''}`} data-tip="Шарнирная неподвижная" data-for="svgTooltip">
					<SupportTwoIcon />
				</div>
				<div onClick={() => { pickAction('SUPPORT_3'); setSubMenuVisible(!subMenuVisible) }} className={`menu-icon ${currentAction === Actions.SUPPORT_3 ? 'active' : ''}`} data-tip="Жесткая заделка" data-for="svgTooltip">
					<SupportThreeIcon />
				</div>
			</div>
		</>
	)
}


export default LeftMenu

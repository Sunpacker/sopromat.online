import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Stage, Layer, Group, Circle, Rect } from 'react-konva'

import { consoleLog } from './utils'
import { selectCurrentAction, selectHistory } from '../../store/ducks/app/selectors'
import { pushHistoryItem } from '../../store/ducks/app/actionCreators'
import { Actions } from '../../store/ducks/app/state'


const Canvas: React.FC = (): React.ReactElement => {
	consoleLog('canvas component has rendered%c')

	interface IStageCoords { x: number; y: number }

	const dispatch = useDispatch()
	let stageRef: any = useRef()
	let [stageScale, setStageScale] = useState<{x: number; y: number}>({ x: 1, y: 1 })
	const [stagePos, setStagePos] = React.useState<IStageCoords>({ x: 0, y: 0 })
	const [grid, setGrid] = useState<any[]>([]) // массив сетки отношением x/y = 2/1 квадратов

	const width: number = window.innerWidth
	const height: number = window.innerHeight
	const padding: number = 50
	const rectsInRow: number = Math.round(width / padding) // для fullHD: 38
	const rectsInCol: number = Math.round(height / padding) // для fullHD: 22
	const endX: number = rectsInRow * padding
	const endY: number = rectsInCol * padding
	
	const currentAction = useSelector(selectCurrentAction)
	const history = useSelector(selectHistory)

	let [hideCursor, setHideCursor] = useState<boolean>(false)
	let [preplacementComponent, setPreplacementComponent] = useState<any | null>(null)
	let [historyComponents, setHistoryComponents] = useState<any[]>([])
	
	function drawGrid() {

		// временный массив для квадратов
		const gridTemp: any = []

		// отрисовка квадратов, рисуется по строкам
		for (var y = 0; y < endY; y += padding) {
			for (var x = 0; x < endX; x += padding) {

				gridTemp.push(
					<Rect
						key={Math.random()}
						x={x} y={y}
						width={padding}
						height={padding}
						stroke="#E6E6E6"
					/>
				)
			}
		}
		
		consoleLog(`grid has drawn with %c${gridTemp.length}%c rects`)

		// перезапись текущей сетки временным массивом
		setGrid(gridTemp)
	}

	let delay: NodeJS.Timeout
	function redrawGrid(): void {
		clearTimeout(delay)
		delay = setTimeout(() => drawGrid(), 50)
	}

	// WheelEvent | any - костыль, ибо в типе KonvaEventObject<WheelEvent> нет полей WheelEvent
	function handleStageWheel(e: WheelEvent | any): void {
		const scaleBy: number = 1.1
		const oldScale: number = stageScale.x
		let cursor: IStageCoords = { x: 0, y: 0 }
		cursor = stageRef.getPointerPosition()

		// координаты перемещения
		const mousePointTo: IStageCoords = {
			x: (cursor.x - stageRef.x()) / oldScale,
			y: (cursor.y - stageRef.y()) / oldScale
		}

		// изменение масштаба в стейте
		const scaleIncrease: number = oldScale * scaleBy
		const scaleDecrease: number = oldScale / scaleBy
		const newScale: number = e.evt.deltaY < 0 ? scaleIncrease : scaleDecrease
		e.evt.deltaY < 0 ? setStageScale({ x: scaleIncrease, y: scaleIncrease }) : setStageScale({ x: scaleDecrease, y: scaleDecrease })

		// установка новой позиции с учетом масштаба
		const newPos: IStageCoords = {
			x: cursor.x - mousePointTo.x * newScale,
			y: cursor.y - mousePointTo.y * newScale
		}
		stageRef.position(newPos)

		// отрисовка изменений
		stageRef.batchDraw()
		redrawGrid()
	}

	function handleObjectPreplacement(e: any): void {
		if(currentAction !== Actions.SELECT) {
			const cursorRectX: number = Math.floor(e.evt.clientX / padding) < 1 ? 1 
			: Math.floor(e.evt.clientX / padding) // нельзя ставить объект на крайнюю точку оси
			const cursorRectY: number = Math.floor(e.evt.clientY / padding) < 1 ? 1 
			: Math.floor(e.evt.clientY / padding) // нельзя ставить объект на крайнюю точку оси
			const nearestRect = grid[rectsInRow * cursorRectY + cursorRectX].props // берется rectsInRow, так как сетка рендерится по строкам

			switch (currentAction) {
				case Actions.NODE:
					if(e.evt.clientX - nearestRect.x < 2 || e.evt.clientY - nearestRect.y < 2) {
						setPreplacementComponent(<Circle
							key={`circle_${Math.random().toString(36).substring(2)}`}
							x={nearestRect.x} y={nearestRect.y}
							radius={6}
							fill="#646464"
						/>)
					}
					break

				default:
					break
			}
		}
	}

	function handleObjectPlacement(e: any): void {
		if(currentAction !== Actions.SELECT) {
			const preplacementComponentProps = preplacementComponent.props

			switch (currentAction) {
				case Actions.NODE:
					dispatch(pushHistoryItem({
						id: Math.random().toString(36).substring(2),
						position: { x: preplacementComponentProps.x, y: preplacementComponentProps.y },
						type: Actions.NODE
					}))
					break

				default:
					break
			}
		}
	}
	
	useMemo(() => {
		history.forEach(object => {
			switch (currentAction) {
				case Actions.NODE:
					setHistoryComponents([
						...historyComponents,
						<Circle key={object.id} x={object.position.x} y={object.position.y} radius={6} fill="#212121" />
					])
				break
			}
		})
	}, [history])

	useEffect(() => {
		if(currentAction === Actions.SELECT) {
			setHideCursor(false)
			setPreplacementComponent(null)
		 } else {
			setHideCursor(true)
		 }
	}, [currentAction])

	useEffect(() => {
		// первичная отрисовка сетки при загрузке страницы
		drawGrid()
		window.addEventListener('resize', redrawGrid)
		return () => window.removeEventListener('resize', redrawGrid)
	}, [])

	return (
		<Stage
			className={`stage ${hideCursor ? 'hide-cursor' : ''}`}
      x={stagePos.x}
      y={stagePos.y}
			width={width} 
			height={height} 
			preventDefault
			onClick={e => handleObjectPlacement(e)}
			onMouseMove={e => handleObjectPreplacement(e)}
			ref={e => stageRef = e}
			// onWheel={e => handleStageWheel(e)}
			// scaleX={stageScale.x} 
			// scaleY={stageScale.y}
		>
      <Layer>
				<Group>{grid}</Group>
				{preplacementComponent}
				<Group>{historyComponents}</Group>
      </Layer>
    </Stage>
	)
}


export default Canvas

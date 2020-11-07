import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Stage, Layer, Text, Line, Group } from 'react-konva'

import { consoleLog } from './utils'
import { selectCurrentAction } from '../../store/ducks/app/selectors'
import { Actions } from '../../store/ducks/app/state'


const Canvas: React.FC = (): React.ReactElement => {
	consoleLog('canvas component has rendered%c')

	interface IStageCoords { x: number; y: number }
	interface ILine {
		id: string;
		points: number[]; // x1, y1, x2, y2, ...
	}

	let stageRef: any = useRef()
	let [stageScale, setStageScale] = useState<{x: number; y: number}>({ x: 1, y: 1 })
	const [grid, setGrid] = useState<ILine[]>([])
	const [stagePos, setStagePos] = React.useState<IStageCoords>({ x: 0, y: 0 })
	
	const currentAction = useSelector(selectCurrentAction)
	
	function drawGrid(): ILine[] {
		const width: number = window.innerWidth
		const height: number = window.innerHeight
		const padding: number = 50
		let linesArray: ILine[]
		
		// генерация горизонтальных и вертикальных линий
		// linesArray = [
		// 	...[...Array(Math.round(height / padding))].map((_, i) => ({
		// 		id: `h${i}`,
		// 		points: [
		// 			Math.round(-stagePos.x * padding),
		// 			Math.round(i * padding),
		// 			Math.round(stagePos.x * padding),
		// 			Math.round(i * padding),
		// 		]
		// 	})),
		// 	...[...Array(Math.round(width / padding))].map((_, i) => ({
		// 		id: `v${i}`,
		// 		points: [
		// 			Math.round(i * padding),
		// 			Math.round(-stagePos.y * padding),
		// 			Math.round(i * padding),
		// 			Math.round(stagePos.y * padding),
		// 		]
		// 	}))
		// ]
		linesArray = [
			...[...Array(Math.round(width / padding))].map((_, i) => ({
				id: `h${i}`,
				points: [Math.round(i * padding), 0, Math.round(i * padding), height]
			})),
			...[...Array(Math.round(width / padding))].map((_, i) => ({
				id: `v${i}`,
				points: [0, Math.round(i * padding), width, Math.round(i * padding)]
			}))
		]

		consoleLog(`grid has drawn with %c${linesArray.length}%c lines`)
		return linesArray
	}

	let resizeTimer: NodeJS.Timeout
	function redrawGrid(): void {
		clearTimeout(resizeTimer)
		// wait until window resize will be done
		resizeTimer = setTimeout(() => {
			setGrid(drawGrid())
		}, 50)
	}

	// WheelEvent | any - костыль, ибо в типе KonvaEventObject<WheelEvent> нет свойств события wheel
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

	function handleObjectPlacement(e: MouseEvent) {
		let cursor: IStageCoords = { x: 0, y: 0 }
		cursor = stageRef.getPointerPosition()
		console.log(cursor)

	}

	useEffect(() => {
		setGrid(drawGrid)

		window.addEventListener('resize', redrawGrid)
		return () => window.removeEventListener('resize', redrawGrid)
	}, [])

	return (
		<Stage 
			className="stage"
      x={stagePos.x}
      y={stagePos.y}
			width={window.innerWidth} 
			height={window.innerHeight} 
			scaleX={stageScale.x} 
			scaleY={stageScale.y}
			ref={e => stageRef = e}
			// onWheel={e => handleStageWheel(e)}
			// onClick={handleObjectPlacement}
			preventDefault
			// draggable
			// onDragEnd={e => {
			// 	console.log(stagePos)
			// 	setStagePos(e.currentTarget.position())
			// 	redrawGrid()
			// }}
		>
      <Layer>
				<Group>
					{grid && grid[0] !== undefined ? (
						grid.map(line => <Line
							key={line.id}
							points={line.points}
							stroke="#ddd"
							strokeWidth={1}
						/>
					)) : (
						<Text x={24} y={24} text="Grid render error" fontSize={24} fill="red" />
					)}
				</Group>
      </Layer>
    </Stage>
	)
}


export default Canvas

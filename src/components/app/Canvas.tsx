import React, { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Text, Line, StageProps, KonvaNodeComponent } from 'react-konva'
import { consoleLog } from './utils'


const Canvas: React.FC = (): React.ReactElement => {
	consoleLog('canvas component has rendered%c')

	let stageRef: any = useRef()
	let scaleX: number = 1
	let scaleY: number = 1

	const [grid, setGrid] = useState<ILine[]>(drawGrid)
	
	interface ILine {
		id: string;
		points: number[];
	}
	function drawGrid(): ILine[] {
		const width: number = window.innerWidth
		const height: number = window.innerHeight
		const padding: number = 50
		let linesArray: ILine[]
		
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
	const handleStageWheel = (e: WheelEvent | any): void => {
		// const scaleBy = 1.1, oldScale = scaleX
		// let cursor: { x: number, y: number } = { x: 0, y: 0 }
		// cursor = stageRef.getPointerPosition()

		// const mousePointTo = {
		// 	x: (cursor.x - stageRef.x()) / oldScale,
		// 	y: (cursor.y - stageRef.y()) / oldScale
		// }

		// const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

		// stageRef.scale({ x: newScale, y: newScale })

		// const newPos = {
		// 	x: cursor.x - mousePointTo.x * newScale,
		// 	y: cursor.y - mousePointTo.y * newScale
		// }
		
		// stageRef.position(newPos)
		// stageRef.batchDraw()
		// redrawGrid()
	}

	useEffect(() => {
		consoleLog('window resize done%c')

		window.addEventListener('resize', redrawGrid)
		return () => window.removeEventListener('resize', redrawGrid)
	}, [])

	return (
		<Stage 
			className="stage" 
			width={window.innerWidth} 
			height={window.innerHeight} 
			preventDefault={true} 
			scaleX={scaleX} 
			scaleY={scaleY}
			ref={e => stageRef = e}
			onWheel={e => handleStageWheel(e)}
		>
      <Layer>
				{grid[0] !== undefined ? (
					grid.map(line => <Line
            key={line.id}
						points={line.points}
						stroke="#ddd"
						strokeWidth={1}
					/>
				)) : (
					<Text x={24} y={24} text="Grid render error" fontSize={24} fill="red" />
				)}
      </Layer>
    </Stage>
	)
}


export default Canvas

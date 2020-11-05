import React, { useEffect, useState } from 'react'
import { Stage, Layer, Text, Line } from 'react-konva'


const Canvas: React.FC = (): React.ReactElement => {
	console.log('%c[App] %ccanvas component has rendered', 'color: pink', '')

	interface ILine {
		id: string;
		points: number[];
		stroke: string;
		strokeWidth: number;
	}

	function drawGrid(): ILine[] {
		const width: number = window.innerWidth
		const height: number = window.innerHeight
		const padding: number = 50
		let linesArray: ILine[]
		
		linesArray = [
			...[...Array(Math.round(width / padding))].map((_, i) => ({
				id: `h${i}`,
				points: [Math.round(i * padding) + 0.5, 0, Math.round(i * padding) + 0.5, height],
				stroke: '#ddd',
				strokeWidth: 1
			})),
			...[...Array(Math.round(width / padding))].map((_, i) => ({
				id: `v${i}`,
				points: [0, Math.round(i * padding), width, Math.round(i * padding)],
				stroke: '#ddd',
				strokeWidth: 1
			}))
		]

		console.log(`%c[App] %cgrid has drawn with %c${linesArray.length}%c lines`, 'color: pink', '', 'color: orange', '')
		return linesArray
	}

  const [grid, setGrid] = useState<ILine[]>(drawGrid())


	useEffect(() => {
		let resizeTimer: NodeJS.Timeout
		const resizeHandler = () => {
			clearTimeout(resizeTimer)
			// wait until window resize will be done
			resizeTimer = setTimeout(() => {
				console.log(`%c[App] %cwindow resize done`, 'color: pink', '')

				setGrid(drawGrid())
			}, 150)
		}

		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [])

	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
				{grid[0] !== undefined ? grid.map(line => <Line
            key={line.id}
						points={line.points}
						stroke={line.stroke}
						strokeWidth={line.strokeWidth}
					/>
				) : <Text x={24} y={24} text="Grid render error" fontSize={24} fill="red" />}
      </Layer>
    </Stage>
	)
}


export default Canvas

import React, { useEffect, useState } from 'react'
import { Circle } from 'react-konva'


const Node: React.FC = (): React.ReactElement => {
	return (
		<div className="menu menu-bottomright">
			<Circle x={0} y={0} radius={4} fill="black" />
		</div>
	)
}


export default Node

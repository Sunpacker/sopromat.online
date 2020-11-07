import React from 'react'
import { useSelector } from 'react-redux'
import { selectTip } from '../../store/ducks/app/selectors'


const MiddleRightMenu: React.FC = (): React.ReactElement => {
	const tip = useSelector(selectTip)

	return (
		<div className="menu menu-middleright">
			<div dangerouslySetInnerHTML={{ __html: tip }}></div>
		</div>
	)
}


export default MiddleRightMenu

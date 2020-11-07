import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import {
	List as ListIcon,
	Objects as ObjectsIcon,
	Notifications as NotificationsIcon,
	User as UserIcon,
} from './icons'

const TopRightMenu: React.FC = (): React.ReactElement => {
	const [loading, setLoading] = useState<boolean>(true)
	const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false)

	const toggleSubMenuVisible = (): void => setSubMenuVisible(!subMenuVisible)

	useEffect(() => {
		setLoading(false)
	}, [])

	return (
		<>
			{loading ? null : <ReactTooltip id="svgTooltip" className="tooltip" backgroundColor="white" textColor="#212121" />}
			
			<div className="menu menu-topright">
				<div className="menu-icon" data-tip="Подробный расчет" data-for="svgTooltip">
					<ListIcon />
				</div>
				<div className="menu-icon" data-tip="Список объектов" data-for="svgTooltip">
					<ObjectsIcon />
				</div>

				<div className="divider"></div>
				
				<NotificationsIcon className="menu-icon" />
				<UserIcon className="menu-icon" />
			</div>
		</>
	)
}


export default TopRightMenu

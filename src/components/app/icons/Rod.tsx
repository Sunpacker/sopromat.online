import React from 'react'


const SelectIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
			<rect y="2" width="4" height="32" rx="2" transform="rotate(-30 0 2)" fill="#212121" />
		</svg>
	)
}


export default SelectIcon

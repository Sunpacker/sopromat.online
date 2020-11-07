import React from 'react'


const SelectIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="3" y="3" width="4" height="28" rx="2" fill="#212121"/>
			<rect x="3" y="7" width="4" height="28" rx="2" transform="rotate(-90 3 7)" fill="#212121"/>
			<circle cx="5" cy="5" r="5" fill="#212121" />
		</svg>
	)
}


export default SelectIcon

import React from 'react'


const SelectIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="29" data-for="svgTooltip" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="1" y="16" width="4" height="28" rx="2" transform="rotate(-90 1 16)" fill="#212121"/>
			<rect width="4" height="28" rx="2" fill="#212121"/>
		</svg>
	)
}


export default SelectIcon

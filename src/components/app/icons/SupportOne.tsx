import React from 'react'


const SelectIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="14" width="4" height="28" rx="2" fill="#212121"/>
			<rect y="28" width="4" height="32" rx="2" transform="rotate(-90 0 28)" fill="#212121"/>
			<circle cx="16" cy="5" r="5" fill="#212121"/>
			<circle cx="16" cy="26" r="5" fill="#212121"/>
		</svg>
	)
}


export default SelectIcon

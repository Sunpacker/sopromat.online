import React from 'react'


const SelectIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9.54301 19.6213V0.749999C9.54301 0.335812 9.20143 0 8.78012 0H5.21994C4.79864 0 4.45705 0.335812 4.45705 0.749999V19.6213H1.52887C0.169518 19.6213 -0.511239 21.237 0.449945 22.182L5.92111 27.5606C6.51699 28.1465 7.48307 28.1465 8.07889 27.5606L13.5501 22.182C14.5112 21.237 13.8305 19.6213 12.4711 19.6213H9.54301Z" fill="#212121" />
		</svg>
	)
}


export default SelectIcon

import React from 'react'


const SelectIcon: React.FC<{ className?: string }> = (props): React.ReactElement => {
	return (
		<svg 
			className={props?.className || ''}
			width="17" height="28" viewBox="0 0 17 28" fill="none" 
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M16.0538 17.9991H10.4181L13.3841 25.4362C13.5907 25.9518 13.3546 26.5299 12.8824 26.7486L10.2705 27.9204C9.7836 28.1392 9.23759 27.8892 9.03098 27.3892L6.21254 20.327L1.60852 25.2018C0.994978 25.8513 0 25.3506 0 24.4987V1.00071C0 0.103837 1.0583 -0.333389 1.60847 0.29765L16.7178 16.296C17.3273 16.9074 16.8776 17.9991 16.0538 17.9991Z" fill="#212121" />
		</svg>
	)
}


export default SelectIcon

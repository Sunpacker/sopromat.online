import React from 'react'


interface ButtonProps {
	text: string;
	variant?: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant }): React.ReactElement => {
	return (
		<button className={variant}>
			{text}
		</button>
	)
}


export default Button

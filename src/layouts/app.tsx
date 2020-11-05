import React from 'react'


interface AppLayoutProps {
	className?: string
}

const AppLayout: React.FC<AppLayoutProps> = ({ className = '', children }): React.ReactElement => {
	return (
		<div className={`app ${className}`}>
			{children}
		</div>
	)
}


export default AppLayout

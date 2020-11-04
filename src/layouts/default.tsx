import React from 'react'
import { Navbar, Footer } from '../components'
import pageClass from '../styles/layouts.module.sass'


interface DefaultLayoutProps {
	className?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ className = '', children }): React.ReactElement => {
	return (
		<>
			<Navbar />
			<div className={`${pageClass.default} container ${className}`}>
				{children}
			</div>
			<Footer />
		</>
	)
}


export default DefaultLayout

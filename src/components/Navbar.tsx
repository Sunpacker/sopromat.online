import Link from 'next/link'
import React from 'react'
import { Button } from './ui'


const Navbar: React.FC = (): React.ReactElement => {
	return (
		<nav>
			<Link href="/">
				<a className="brand text-size_2">sopromat.online</a>
			</Link>
			<Button text="Вход" variant="inversed" />
			<Button text="Регистрация" />
		</nav>
	)
}


export default Navbar

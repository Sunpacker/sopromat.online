import Link from 'next/link'
import React from 'react'


const Footer: React.FC = (): React.ReactElement => {
	return (
		<footer>
			<Link href="/">
				<a className="brand text-size_2">&copy; 2020 sopromat.online</a>
			</Link>
			<div>
				Разработано: <a href="https://sunpacker.github.io" target="_blank">https://sunpacker.github.io</a>
			</div>
		</footer>
	)
}


export default Footer

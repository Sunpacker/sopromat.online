import React from 'react'
import Link from 'next/link'

import { DefaultLayout } from '../layouts'
import { Button } from '../components/ui'
import layout from '../styles/layout.module.sass'

const ErrorPage: React.FC = (): React.ReactElement => {
	return (
		<DefaultLayout className={layout.error}>
			<h2>Страница не найдена.</h2>
			<Link href="/">
				<a>
					<Button text="Вернуться на главную" />
				</a>
			</Link>
		</DefaultLayout>
	)
}


export default ErrorPage

import React from 'react'
import { NextSeo } from 'next-seo'

import { DefaultLayout } from '../layouts'
import { Button } from '../components/ui'
import Link from 'next/link'


const Landing: React.FC = (): React.ReactElement => {
	const SEO = {
		title: 'Главная | sopromat.online',
		description: 'Построение эпюр онлайн. Бесплатно.'
	}
	
	return (
		<DefaultLayout className="landing">
			<NextSeo {...SEO} />
			<div className={`intro`}>
				<img className="ring ring_1" src={require('../assets/images/ring_1.jpg')} />
				<img className="ring ring_2" src={require('../assets/images/ring_2.jpg')} />
				<h1 className="text-size_3">Построение эпюр онлайн. Бесплатно.</h1>
				<Link href="/app">
					<a>
						<Button text="Начать построение" />
					</a>
				</Link>
				<img className="diagram" src={require('../assets/images/diagram.jpg')} />
			</div>
		</DefaultLayout>
	)
}


export default Landing

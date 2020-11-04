import React from 'react'

import { DefaultLayout } from '../layouts'
import { Button } from '../components/ui'


const Landing: React.FC = (): React.ReactElement => {
	
	return (
		<DefaultLayout className="landing">
			<div className={`intro`}>
				<h1 className="text-size_3">Построение эпюр онлайн. Бесплатно.</h1>
				<Button text="Начать построение" />
			</div>
		</DefaultLayout>
	)
}


export default Landing

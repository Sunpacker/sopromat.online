import React from 'react'
import dynamic from 'next/dynamic'
import { AppLayout } from '../layouts'
import { LeftMenu, TopRightMenu, BottomRightMenu } from '../components/app'


const CanvasComponent =  dynamic(
  (): any => import('../components/app/Canvas'),
  { ssr: false }
)

const App: React.FC = (): React.ReactElement => {
	return (
		<AppLayout>
			<LeftMenu />
			<TopRightMenu />
			<BottomRightMenu />
			<CanvasComponent />
		</AppLayout>
	)
}


export default App

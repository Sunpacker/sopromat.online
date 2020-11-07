import React from 'react'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'


const CanvasComponent = dynamic((): any => import('../components/app/Canvas'), { ssr: false })
const LeftMenuComponent = dynamic((): any => import('../components/app/LeftMenu'), { ssr: false })
const TopRightMenuComponent = dynamic((): any => import('../components/app/TopRightMenu'), { ssr: false })
const MiddleRightMenuComponent = dynamic((): any => import('../components/app/MiddleRightMenu'), { ssr: false })
// const BottomRightMenuComponent = dynamic((): any => import('../components/app/BottomRightMenu'), { ssr: false })

const App: React.FC = (): React.ReactElement => {
	const SEO = {
		title: 'Построение эпюр | sopromat.online'
	}

	return (
		<div className="app">
			<NextSeo {...SEO} />
			<div className="menus">
				<LeftMenuComponent />
				<TopRightMenuComponent />
				<MiddleRightMenuComponent />
				{/* <BottomRightMenuComponent /> */}
			</div>
			<CanvasComponent />
		</div>
	)
}


export default App

import React from 'react'
import type { AppProps } from 'next/app'
import ProgressBar from 'nextjs-progressbar'
import '../styles/index.sass'
import { store } from '../store'
import { Provider } from 'react-redux'


function App({ Component, pageProps }: AppProps) {
  return (
		<Provider store={store}>
			<ProgressBar
				color="#212121"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</Provider>
	)
}


export default App

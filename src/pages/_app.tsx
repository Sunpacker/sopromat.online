import type { AppProps } from 'next/app'
import ProgressBar from 'nextjs-progressbar'
import '../styles/index.sass'


function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<ProgressBar
				color="#212121"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	)
}


export default App

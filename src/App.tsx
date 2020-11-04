import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'


const App = () => {
  return (
    <div className="App">
			<Switch>
				<Route path="/" component={Landing} />
			</Switch>
    </div>
  )
}

export default App

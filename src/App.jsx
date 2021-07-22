import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home/index'
import NextDays from './Pages/NextDays'
import { WeatherContextProvider } from './context/WeatherContext'

function App() {
  return (
    <WeatherContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={NextDays} path='/nextdays' exact />
        </Switch>
      </Router>
    </WeatherContextProvider>

  )
}

export default App

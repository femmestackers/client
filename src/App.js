import React from 'react'
import Home from './components/Home'
import './components/Styles.css'
import {BrowserRouter, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

export default App
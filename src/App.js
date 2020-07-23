import React from 'react'
import Home from './components/Home'
import AllSmoothies from './components/AllSmoothies'
import NewSmoothie from './components/NewSmoothie'
import Smoothie from './components/Smoothie'
import Register from './components/Register'
import Login from './components/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './components/Styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/signup" component={Register}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/smoothies" component={AllSmoothies}/>
    <Route exact path="/newsmoothie" component={NewSmoothie}/>
    <Route exact path="/smoothie" component={Smoothie}/>
    </Switch>
    <Footer/>
    </Router>
  )
}

export default App
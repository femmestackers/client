import React, { useState, useEffect } from 'react'
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
import sm_data from "./data/sm_data"


const App = () => {
  return (
    <div>
        <div>
        <Router>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/auth/register" component={Register}/>
        <Route exact path="/auth/login" component={Login}/>
        <Route exact path="/smoothies" component={AllSmoothies}/>
        <Route exact path="/newsmoothie" component={NewSmoothie}/>
        <Route exact path="/smoothie" component={Smoothie}/>
        </Switch>
        <Footer/>
        </Router>
        </div>
    </div>
  )
}

export default App
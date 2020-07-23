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
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


const App = () => {
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/signup"><Register/></Route>
    <Route exact path="/login"><Login/></Route>
    <Route exact path="/smoothies"><AllSmoothies/></Route>
    <Route exact path="/newsmoothie"><NewSmoothie/></Route>
    <Route exact path="/smoothie"><Smoothie/></Route>
    </Switch>
    <Footer/>
    </Router>
  )
}

export default App
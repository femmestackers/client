import React, {useEffect, useReducer} from 'react'
import Home from './components/Home'
import AllSmoothies from './components/AllSmoothies'
import stateReducer from './config/stateReducer'
import {StateContext} from './config/store'
import NewSmoothie from './components/NewSmoothie'
import Smoothie from './components/Smoothie'
import Register from './components/Register'
import Login from './components/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './components/Styles.css'
import {getSmoothies} from './services/smoothieServices'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {

    // initial state for state reducer
    const initialState = {
      smoothies: [],
      //loggedInUser: null,
    }
  
    function fetchAllSmoothies() {
      getSmoothies().then((smoothiesData) => {
        dispatch({
          type: "setSmoothies",
          data: smoothiesData
        })
      }).catch((error) => {
        dispatch({
          type: "setError",
          data: true
        })
      
        
        console.log("An error occurred fetching all smoothies from the server:", error)  
      })
    }
    useEffect(() => {
      fetchAllSmoothies()
      
    },[])
        
    // Create state reducer store and dispatcher
    const [store, dispatch] = useReducer(stateReducer,initialState)
    //const {Smoothies, error} = store
  return (
    <StateContext.Provider value= {{store, dispatch}}>
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
    </StateContext.Provider>
  )
}

export default App
import React, {useEffect, useReducer} from 'react'
import Home from './components/Home'
import AllSmoothies from './components/AllSmoothies'
import stateReducer from './config/stateReducer'
import {StateContext} from './config/store'
import NewSmoothie from './components/NewSmoothie'
import EditSmoothie from './components/EditSmoothie'
import Smoothie from './components/Smoothie'
import Register from './components/Register'
import Login from './components/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './components/Styles.css'
import {getSmoothies, getSmoothieFromId} from './services/smoothieServices'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {userAuthenticated} from './services/authServices'


const App = () => {
  // initial state for state reducer
  const initialState = {
    smoothies: [],
    loggedInUser: null,
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

  useEffect(() => {
    userAuthenticated().then((response) => {
      const username = response.data
      if(username) {
        dispatch({
          type: "setLoggedInUser",
          data: username
        })
      }
    })
    .catch((error)=> {
      console.log("No user authenticated", error.message)
    })
  },[])

      
  // Create state reducer store and dispatcher
  const [store, dispatch] = useReducer(stateReducer,initialState)
  const {smoothies} = store

  const titleStyles = {
    color: 'green',
    fontSize: '1.2em',
    marginBottom: '2.2em',
  }
  return (
    <div>
        <div>
          <StateContext.Provider value= {{store, dispatch}}>
          <Router>
          <Nav/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/auth/register" component={Register}/>
          <Route exact path="/auth/login" component={Login}/>
          <Route exact path="/smoothies" component={AllSmoothies}/>
          <Route exact path="/smoothies/new" component={NewSmoothie}/>
          <div className="single-smoothie-container">
            <div>
              <br/>
              <h1 style={titleStyles}>Click on ViewAllSmoothies to see all the smoothies</h1>
              <div>
              <Route exact path="/smoothies/:id" render={(props) => <Smoothie {...props} smoothie={getSmoothieFromId(smoothies, props.match.params.id)} /> } />
              </div>
            </div>
            <div className="background-pic-single-smoothi-box">
            </div>
          </div>
          <Route exact path="/smoothies/edit/:id" component={EditSmoothie} />
          </Switch>
          <Footer/>
          </Router>
          </StateContext.Provider>
        </div>
    </div>
  )
}

export default App
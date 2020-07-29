import {setLoggedInUser }from "../services/authServices"
  
  export default function (state, action) {
    switch (action.type) {

      case "setLoggedInUser": {
        setLoggedInUser(action.data)
        return {
          ...state,
          loggedInUser: action.data
        }
      }
      case 'setSmoothies': {
        return {
          ...state,
          smoothies: action.data
        };
      }
      
      case "setError": {
        return {
          ...state,
          error: action.data
        }
      }
      default:
        return state
    }
  }
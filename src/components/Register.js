import './Styles.css'
import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {registerUser} from '../services/authServices'

const Register = ({history}) => {
    const initialFormState = {
        username: "",
        email: "",
        password: "",
        
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const [errorMessage,setErrorMessage] = useState(null)
    const {dispatch} = useGlobalState()

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        registerUser(userDetails).then(() => {
        dispatch({
            type: "setLoggedInUser",
            data: userDetails.username
        })
        history.push("/")
    }).catch((error) => {
        const status = error.response ? error.response.status : 500
        if(status === 409) {
            // This username is already registered. Let the user know.
            setErrorMessage("This username already exists. Please try again")				
        }
        else {
            // There was some other error - maybe the server or db is down
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
        }
        console.log(`registration failed with error: ${error} and status ${status}`)
    })
}

return (
  <div className="first-container-signup">
      {errorMessage && <p data-cy="errorMessage" style={{color: "red"}}>{errorMessage}</p>}
      <form>
          <div>
              <label>Username</label>
              <input data-cy="username" type="text" name="username" placeholder="Enter a username"  onChange={handleChange}/>
          </div>
          <br/>
          <div>
              <label>Email</label>
              <input data-cy="email" type="text" name="email" placeholder="Enter an email"  onChange={handleChange}/>
          </div>
          <br/>
          <div>
              <label>Password</label>
              <input data-cy="password" type="password" name="password" placeholder="Enter a password"  onChange={handleChange}/>
          </div>
          <br/>
          <div>
              <label>Confirm Password</label>
              <input data-cy="confirmpassword" type="password" name="confirm-password" placeholder="Confirm the password"  onChange={handleChange}/>
          </div>
          <br/>
          <input data-cy="signupButton" type="submit" value="Signup" onClick={handleSubmit}/>
      </form>
  </div>
)
    }


export default Register
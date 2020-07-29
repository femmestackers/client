import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {registerUser} from '../services/authServices'
import './Styles.css'

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
    const labelStyles = {
        color: 'green',
        fontSize: '1.2em',
    }
    const titleStyles = {
        color: 'green',
        fontSize: '2.2em',
    }

return (
  <div className="first-container-signup">
      <div className="formbox"> 
        {errorMessage && <p data-cy="errorMessage" style={{color: "red"}}>{errorMessage}</p>}
        <form>
            <div>
                <label style={titleStyles}>Signup</label>
            </div>
            <div>
                <label style={labelStyles}>Username</label>
                <input data-cy="username" type="text" name="username" placeholder="Enter a username"  onChange={handleChange}/>
            </div>
            <div>
                <label style={labelStyles}>Email</label>
                <input data-cy="email" type="text" name="email" placeholder="Enter an email"  onChange={handleChange}/>
            </div>
            <div>
                <label style={labelStyles}>Password</label>
                <input data-cy="password" type="password" name="password" placeholder="Enter a password"  onChange={handleChange}/>
            </div>
            <div>
                <label style={labelStyles}>Confirm Password</label>
                <input data-cy="confirmpassword" type="password" name="confirm-password" placeholder="Confirm the password"  onChange={handleChange}/>
            </div>
            <input data-cy="signupButton" type="submit" value="Signup" onClick={handleSubmit}/>
        </form>
      </div>
  </div>
)
}


export default Register
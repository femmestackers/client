import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'
import './Styles.css'


const Login = ({history}) => {
    const initialFormState = {
        username: "",
        password: ""
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)
    const {dispatch} = useGlobalState()


    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }
    /*function validateForm() {
        return email.length > 5 && password.length > 5;
      }
      */
    
    function handleSubmit(event) {
        event.preventDefault()
        // Attempt login on server
        loginUser(userDetails).then((response) => {
            dispatch({
                type: "setLoggedInUser",
                data: userDetails.username
            })
            setLoggedInUser(userDetails.username)
            //setErrorMessage(null)
            history.push("/")

        }
        )
        .catch((error) => {
            console.log("error", error)
            if (error.response && error.response.status === 401)
                 setErrorMessage("Authentication failed. Please check your username and password.")
            else   
                setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
        })		
    }

   


return (
    <div className="first-container-login">
        <form>
            {errorMessage && <p data-cy="errorMessage" style={{color: "red"}}>{errorMessage}</p>}
            <div>
                <label>Username<input data-cy="username" type="text" name="username" onChange={handleChange}/></label>
            </div>
            <div>
                <label>Password:<input data-cy="password" type="password" name="password" onChange={handleChange}/></label>
            </div><br/>
                <input data-cy="loginButton" type="submit" name="Login" onClick={handleSubmit}/> 
    </form>
    </div>
      )
}

export default Login
import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'
import './Styles.css'

const Login = ({history}) =>{
    const initialFormState = {
        username: "",
        password: ""
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useGlobalState()

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
        // Attempt login on server
        loginUser(userDetails).then(() => {
            dispatch({
                type: "setLoggedInUser",
                data: userDetails.username
            })
            history.push("/")
            
        }).catch((error) => {
            console.log(`An error occurred authenticating: ${error}`)
        })		
    }    
    
return (
    <div className="first-container-login">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:<input type="text" name="email" onChange={handleChange} /></label>
            </div><br/>
            <div>
                <label>Password:<input type="password" name="password" onChange={handleChange} /></label>
            </div><br/>
                <input type="submit" value="LogIn" />
    </form>
    </div>
      )
}
export default Login
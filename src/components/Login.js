import React, {useState} from 'react'
//import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'
import './Styles.css'


const Login = ({history}) => {
const initialFormState = {
email: "",
password: ""
}
const [userDetails,setUserDetails] = useState(initialFormState)
const [errorMessage, setErrorMessage] = useState(null)



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
loginUser(userDetails).then(() => {
setLoggedInUser(userDetails.username)
setErrorMessage(null)
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

const labelStyles = {
    color: 'green',
    fontSize: '1.2em',
}

return (
<div className="first-container-login">
    <div >
        <form  onSubmit={handleSubmit}>
        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
        <div>
        <label style={labelStyles}>Username:<input data-cy="username" type="text" name="username" onChange={handleChange}/></label>
        </div>
        <div>
        <label style={labelStyles}>Password:<input  data-cy="password" type="password" name="password" onChange={handleChange}/></label>
        </div>
        <input  data-cy="loginButton" type="submit" value="LogIn"/>
        </form>
    </div>
</div>
)
}

export default Login
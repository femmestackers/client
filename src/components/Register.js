import './Styles.css'
import React, {useState} from 'react'
//import {useGlobalState} from '../config/store'

const Register = ({history}) => {
    const initialFormState = {
        username: "",
        email: "",
        password: "",
        
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    //const dispatch = useGlobalState()

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
        //dispatch({
            //type: "setLoggedInUser",
            //data: userDetails.username
        //})
        history.push("/")
    }

return (
  <div className="first-container-signup">
      <form onSubmit={handleSubmit}>
          <div>
              <label>Username</label>
              <input data-cy="username" type="text" name="username" placeholder="Enter a username"  onChange={handleChange}></input>
          </div>
          <br/>
          <div>
              <label>Email</label>
              <input data-cy="email" type="text" name="email" placeholder="Enter an email"  onChange={handleChange}></input>
          </div>
          <br/>
          <div>
              <label>Password</label>
              <input data-cy="password" type="password" name="password" placeholder="Enter a password"  onChange={handleChange}></input>
          </div>
          <br/>
          <div>
              <label>Confirm Password</label>
              <input data-cy="confirmpassword" type="password" name="confirm-password" placeholder="Confirm the password"  onChange={handleChange}></input>
          </div>
          <br/>
          <input data-cy="signupButton" type="submit" value="Signup"></input>
      </form>
  </div>
)
}


export default Register
import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import './Styles.css'

const Register = ({history}) => {
    const initialFormState = {
        username: "",
        email: "",
        password: "",
        
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
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
        dispatch({
            type: "setLoggedInUser",
            data: userDetails.username
        })
        history.push("/")
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
      <form onSubmit={handleSubmit}>
          <div>
              <label style={titleStyles}>Signup</label>
           </div>
          <div>
              <label style={labelStyles}>Username</label>
              <input type="text" name="username" placeholder="Enter a username"  onChange={handleChange}></input>
          </div>
          <div>
              <label style={labelStyles}>Email</label>
              <input type="text" name="email" placeholder="Enter an email"  onChange={handleChange}></input>
          </div>
          <div>
              <label style={labelStyles}>Password</label>
              <input type="password" name="password" placeholder="Enter a password"  onChange={handleChange}></input>
          </div>
          <div>
              <label style={labelStyles}>Confirm Password</label>
              <input type="password" name="confirm-password" placeholder="Confirm the password"  onChange={handleChange}></input>
          </div>
          <input type="submit" value="SignUp"></input>
      </form>
      </div>
  </div>
)
}


export default Register
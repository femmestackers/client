import React from 'react'
import './Styles.css'

const Register = () =>{
return (
  <div className="first-container-signup">
      <form>
          <div>
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter a username"></input>
          </div>
          <br/>
          <div>
              <label>Email</label>
              <input type="text" name="email" placeholder="Enter an email"></input>
          </div>
          <br/>
          <div>
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter a password"></input>
          </div>
          <br/>
          <div>
              <label>Confirm Password</label>
              <input type="password" name="confirm-password" placeholder="Confirm the password"></input>
          </div>
          <br/>
          <input type="submit" value="SignUp"></input>
      </form>
  </div>
)
}
export default Register
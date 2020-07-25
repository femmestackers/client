import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'
import './Styles.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

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

return (
    /*<div className="first-container-login">
        <form onSubmit={handleSubmit}>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
            <div>
                <label>Username<input type="text" name="username" onChange={handleChange}/></label>
            </div>
            <br/>
            <div>
                <label>Password:<input type="password" name="password" onChange={handleChange}/></label>
            </div><br/>
                <input type="submit" name="LogIn"/>
    </form>
    </div>*/
    
/*<div div className="first-container-login">
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>*/

<div className="first-container-login">
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="Login">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>

      )
}

export default Login
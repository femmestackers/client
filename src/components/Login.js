import React from 'react'
import './Styles.css'

const Login = () =>{
return (
    <div className="first-container-login">
        <form>
            <div>
                <label>Email:<input type="text" name="email" /></label>
            </div><br/>
            <div>
                <label>Password:<input type="password" name="password" /></label>
            </div><br/>
                <input type="submit" value="LogIn" />
    </form>
    </div>
      )
}
export default Login
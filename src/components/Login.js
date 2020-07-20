import React, {useState} from 'react'

const Login = () =>{
return (
    <form onSubmit={handleSubmit}>
        <div style={divStyles}>
            <label style={labelStyles}>Username</label>
            <input style={inputStyles} required type="text" name="username" placeholder="Enter a username" onChange={handleChange}></input>
        </div>
        <div style={divStyles}>
            <label style={labelStyles}>Password</label>
            <input style={inputStyles} required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></input>
        </div>
        <input type="submit" value="Login"></input>
        
    </form>
)
}
export default Login
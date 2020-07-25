import React from 'react';
import {
    Link
} from "react-router-dom";
import './Styles.css'

const Nav = () =>{
    return (
        <div>
        <div className="navbar">
                <div className="navelement1">
                    <p className="navtitle">SMOOTHIVERSE</p>
                </div>
                <div className="navelement2">
                    <Link className="navtext" to="/" >Home</Link>
                    <Link className="navtext" to="/auth/register" >SignUp</Link>
                    <Link data-cy="login" className="navtext" to="/auth/login" >Login</Link>
                    <Link className="navtext" to="/smoothies" >ViewAll</Link>
                    <Link className="navtext" to="/newsmoothie" >AddSmoothie</Link>
                    <Link data-cy="logout" className="navtext" to="/" >Logout</Link>
                </div>
        </div>
        </div>

        
          )
    }
    export default Nav
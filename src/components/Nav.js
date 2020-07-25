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
                    <Link className="navtext" to="/signup" >SignUp</Link>
                    <Link className="navtext" to="/login" >LogIn</Link>
                    <Link className="navtext" to="/smoothies" >ViewAll</Link>
                    <Link className="navtext" to="/newsmoothie" >AddSmoothie</Link>
                    <Link className="navtext" to="/" >LogOut</Link>
                </div>
        </div>
        </div>
    )
    }
    export default Nav
import React from 'react';
import {Link} from "react-router-dom";
import './Styles.css'
import {useGlobalState} from '../config/store'
import {logoutUser} from '../services/authServices'


const Nav = () =>{

    // Logout user
    function handleLogout() {
        logoutUser().then((response) => {
            console.log("Got back response on logout", response.status)
        }).catch ((error) => {
            console.log("The server may be down - caught an exception on logout:", error)
        })
        // Even if we catch an error, logout the user locally
        dispatch({
            type: "setLoggedInUser",
            data: null
        })
    }

    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store


    return (
        <div>
        <div className="navbar">
                <div className="navelement1">
                    <p className="navtitle">SMOOTHIVERSE</p>
                </div>
                {loggedInUser 
                ? (
                <div data-cy="loginNav" className="navelement2">
                    <Link className="navtext" to="/" >Home</Link>
                    <Link className="navtext" to="/smoothies" >View All Smoothies</Link>
                    <Link className="navtext" to="/smoothies/new" >Add Smoothie</Link>
                    <Link data-cy="logout" className="navtext" to="/" onClick={handleLogout}>Logout</Link>
                </div>)
                 : (<div data-cy="logoutNav">
                 <Link className="navtext" to="/" >Home</Link>
                 <Link data-cy="signup" className="navtext" to="/auth/register" >Signup</Link>
                 <Link data-cy="login" className="navtext" to="/auth/login" >Login</Link>
                 </div>)}
        </div>
        </div>

    )
    }

    export default Nav
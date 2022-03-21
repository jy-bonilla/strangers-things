import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = (props) => {
    const setLogedIn = props.setLogedIn
    const logedIn = props.logedIn
    const handleLogOut = (event) => {
        event.preventDefault()
        setLogedIn(false)
        localStorage.removeItem("token")
    }
    return (
        <nav className="navbar">
            <h1>Stanger's Things</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/Post">POSTS</Link>
                <Link to="/Profile">PROFILE</Link>
                {/* <Link to="/Login">LOGIN</Link> */}
                {logedIn ? <Link to="/Logout" onClick={handleLogOut}>LOGOUT</Link> : <Link to="/LogIn">LOGIN</Link>}
                {/* <Link to="/Logout">LOGOUT</Link> */}
            </div>
        </nav>
    );
}
export default Navbar;
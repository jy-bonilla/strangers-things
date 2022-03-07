import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stanger's Things</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/Post">POSTS</Link>
                <Link to="/Profile">PROFILE</Link>
                <Link to="/Login">LOGIN</Link>
                <Link to="/Logout">LOGOUT</Link>
            </div>
        </nav>
    );
}
export default Navbar;
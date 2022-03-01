import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stanger's Things</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/Post">POST</Link>
                {/* <a href="/Login">LOGIN</a> */}
                <Link to="/Register">REGISTER</Link>
            </div>
        </nav>
    );
}
export default Navbar;
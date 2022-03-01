import react from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stanger's Things</h1>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/Post">POSTS</a>
                {/* <a href="/Login">LOGIN</a> */}
                <a href="/Register">REGISTER</a>
            </div>
        </nav>
    );
}
export default Navbar;
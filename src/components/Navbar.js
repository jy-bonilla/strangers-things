import react from "react";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stanger's Things</h1>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/post">POSTS</a>
                <a href="/login">LOGIN</a>
            </div>
        </nav>
    );
}
export default Navbar;
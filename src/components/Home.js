import React from "react"
const Home = (props) => {
    const setLogedIn = props.setLogedIn
    const logedIn = props.logedIn
    const setUsername = props.setUsername
    const username = props.username

    return (
        <div className="home">
            <h2>You are currently logedIn as: {logedIn} </h2>
        </div>
    );
}

export default Home;
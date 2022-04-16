import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/Post";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import PostMatches from './components/PostMatches';
import NewPost from './components/NewPost';




function App() {
  const [logedIn, setLogedIn] = useState(false)

  useEffect(() => {
    localStorage.getItem("token") ? setLogedIn(true) : setLogedIn(false)
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar setLogedIn={setLogedIn} logedIn={logedIn} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/PostMatches">
              <PostMatches />
            </Route>
            <Route exact path='/NewPost'>
              <NewPost />
            </Route>
            <Route path="/Post">
              <Post />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Login">
              <Login setLogedIn={setLogedIn} />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;

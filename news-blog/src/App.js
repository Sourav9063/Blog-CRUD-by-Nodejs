// import logo from './logo.svg';
import React from 'react'
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { UserProvider, useUser } from './UserContext';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import CreatePost from './pages/CreatePost/CreatePost';
import Profile from './components/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';


function App() {

  return (



    <UserProvider>
      <nav className="flex_right" >
        <Link className="button_border" to="/">Home</Link>
        <Link className="button_border" to="/createpost">Create Post</Link>
        <Link className="button_border" to="/signin">Sign In</Link>
        <Link className="button_border" to="/signup">Sign Up</Link>
        <Link className="button_border" to="/signIn" >Sign Out</Link>

        <Link className="button_border" style={{ borderRight: "3px solid black" }} to="/profile">Profile</Link>





      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profileedit' element={<ProfileEdit />} />


      </Routes >
    </UserProvider >


    // <h1>Hii</h1>

  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
// https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=536s&ab_channel=WebDevSimplified
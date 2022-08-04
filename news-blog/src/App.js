// import logo from './logo.svg';
import React from 'react'
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { UserProvider } from './UserContext';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (

    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route />

      </Routes >
    </UserProvider >


    // <h1>Hii</h1>

  );
}

export default App;

// https://blog.webdevsimplified.com/2022-07/react-router/
// https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=536s&ab_channel=WebDevSimplified
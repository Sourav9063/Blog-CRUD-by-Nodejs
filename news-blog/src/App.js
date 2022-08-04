// import logo from './logo.svg';
import React from 'react'
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { UserProvider } from './UserContext';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<h1>SignUp</h1>} />
        <Route />

      </Routes >
    </UserProvider >


    // <h1>Hii</h1>

  );
}

export default App;

import logo from './logo.svg';
import React from 'react'
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { UserProvider } from './UserContext';
import Home from './pages/Home/Home';

function App() {
  return (

    <UserProvider>
      <SignIn />
      <Home />
    </UserProvider>


    // <h1>Hii</h1>

  );
}

export default App;

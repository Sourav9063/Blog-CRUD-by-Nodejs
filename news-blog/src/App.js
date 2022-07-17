import logo from './logo.svg';
import React from 'react'
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { UserProvider } from './UserContext';

function App() {
  return (

    <UserProvider>
      <SignIn />
    </UserProvider>


    // <h1>Hii</h1>

  );
}

export default App;

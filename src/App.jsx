import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import MenuAppBar from './components/MenuBar/MenuBar';

const menu = {
  
}

function App() {
  return (
    <>
      <MenuAppBar>
        <Login/>
      </MenuAppBar>
    </>
  );
}

export default App;

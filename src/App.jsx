import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import MenuAppBar from './components/MenuBar/MenuBar';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MenuAppBar>
        <Login/>
      </MenuAppBar>
    </AuthProvider>
  );
}

export default App;

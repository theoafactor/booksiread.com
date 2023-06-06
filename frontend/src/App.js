import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import User from "./Components/User/User";
import './App.css';
import { createContext } from 'react';
import { AuthProvider } from './Auths/Auth/Auth';

/**
 * - We need a way to centrally manage data/props. 
 * For this, we will be using useContext
 */




function App() {

//Okay




  return (
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user" element={<User />}></Route>
           </Routes>
        </AuthProvider>
  );
}

export default App;
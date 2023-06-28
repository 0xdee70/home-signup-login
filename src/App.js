import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login}/>
            <Route path='/signup' Component={Signup}/>
        </Routes>
    </Router>
  )
}

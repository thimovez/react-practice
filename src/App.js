import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <Router>
        <Navbar/>
        <AppRouter/>
      </Router>
    </AuthContext.Provider>

  )
}

export default App;

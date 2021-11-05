import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  )
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import ResponsiveAppBar from './components/Navbar'
import './App.css';


function App() {
  return (
      <>
        <ResponsiveAppBar />
        <Outlet />
      </>
    );
}

export default App;

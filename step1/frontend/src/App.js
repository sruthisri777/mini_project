import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Routes1 from './components/Routes1';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes1/>
   <div className="mt-4"></div>
   
   </BrowserRouter>
   </>
  );
}

export default App;

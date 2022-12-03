import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ErrorBoundry from './components/ErrorBoundry';


function App() {
  return (
    <>
    <ErrorBoundry>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
   </ErrorBoundry>
   </>
  );
}

export default App;

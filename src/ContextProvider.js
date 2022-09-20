import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState,useContext} from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextContext from './text context/TextContext';

export default function ContextProvider() {
    const context = useContext(TextContext);
    const {handleUpClick,handleLoClick,handleOnChange,handleCopy,handleExtraSpaces} = context;
  return (
   <>

  <Router>
    <Navbar title="TextUtils"  />
    <Alert/>
    <Routes>
        <Route path='/' element={<TextForm alert={alert} clickEvent={handleUpClick} />} />
        <Route path='/lowercase' element={<TextForm alert={alert} clickEvent={handleLoClick} />} />
        <Route path='/remove-extra-space' element={<TextForm alert={alert} clickEvent={handleExtraSpaces} />} />
        <Route path='/find-and-replace' element={<TextForm alert={alert} clickEvent={handleUpClick} />} />
    </Routes>
    <Footer />
    </Router>
    
   </>
  )
}

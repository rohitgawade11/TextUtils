import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useContext} from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextContext from './text context/TextContext';

export default function ContextProvider() {
    const context = useContext(TextContext);
    const {handleUpClick,handleLoClick,handleExtraSpaces} = context;
  return (
   <>

  <Router>
    <Navbar title="TextUtils"  />
    <Alert/>
    <Routes>
        <Route path='/' element={<TextForm alert={alert} clickEvent={handleUpClick} example={{ex:"this was lowercase text",op:"THIS WAS LOWERCASE TEXT"}} />} />
        <Route path='/lowercase' element={<TextForm alert={alert} clickEvent={handleLoClick} example={{ex:"THIS WAS SUPPOSED TO BE IN LOWERCASE",op:"this was supposed to be in lowercase"}} />} />
        <Route path='/remove-extra-space' element={<TextForm alert={alert} clickEvent={handleExtraSpaces} example={{ex:"This text has      lot of extra      spaces",op:"This text has lot of extra spaces"}} />} />
        <Route path='/find-and-replace' element={<TextForm alert={alert} clickEvent={handleUpClick} />} />
    </Routes>
    <Footer />
    </Router>
    
   </>
  )
}

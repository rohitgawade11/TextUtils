import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message)=>{
      setAlert(message)
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  
  return (
    <>
  <Router>
    <Navbar title="TextUtils"  />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>
    <Footer />
    </Router>
    </> 
  );
}

export default App;
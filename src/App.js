import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

 
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  
  return (
    <>
  
    <Navbar title="TextUtils"  />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>
    </> 
  );
}

export default App;
// import logo from './logo.svg';
import React, { useState } from 'react';
// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,

// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#051440';
      showAlert("Dark Mode Has been Enabled", "success");
      document.title = 'TextUtils-Dark-Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000)
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500)
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
      setAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-light-Mode';
    }
  }

  return (
    <>
    
        {/* <Navbar tittle="TextUtils" abouttext="aboutus"/>*/}

        <Navbar tittle='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
{/* 
          <Routes> */}
            {/* <Route exact path="/about" element={<About />
            }> */}
{/* 
            </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text For Analyze Below" mode={mode} />}> */}
            {/* </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter The Text For Analyze Below" mode={mode} />
        </div>

    
    </>

  );
}

export default App;

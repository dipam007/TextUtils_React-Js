import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.title = "TextUtils-DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = "TextUtils-LightMode";
    }
  } 

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <Router>
        <div>
          <Navbar title="TextUtils" link1="https://reactjs.org/docs/introducing-jsx.html" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/">
                <TextForm mode={mode} showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Lowecase to Uppercase, Uppercase to Lowercase, Inverse the Text, Remove Extra Spaces, Copy the Text :"/>
            </Route>
            <Route exact path="/about">
                <About mode={mode}/>
            </Route>
            <Route exact path="/contact">
                <Contact mode={mode}/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

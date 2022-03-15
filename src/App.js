import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.title = "TextUtils-DarkMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = "TextUtils-LightMode"
    }
  } 

  return (
    <Router>
        <div>
          <Navbar title="TextUtils" link1="https://reactjs.org/docs/introducing-jsx.html" mode={mode} toggleMode={toggleMode}/>
          <Switch>
            <Route exact path="/">
                <TextForm heading="Enter the text to analyze:" mode={mode}/>
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

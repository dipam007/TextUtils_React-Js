import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode,setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  } 

  return (
    <div>
      <Navbar title="TextUtils" link1="https://reactjs.org/docs/introducing-jsx.html" mode={mode} toggleMode={toggleMode}/>

      <div className="container">
        <TextForm heading="Enter the text to analyze:" mode={mode}/>
      </div>
      
    </div>
  );
}

export default App;

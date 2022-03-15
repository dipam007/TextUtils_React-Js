import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");
    
    const [currentTextSize, setCurrentTextSize] = useState(15); 

    const handleOnChange = (event)=>{
        setText(event.target.value);
    } 

    const handleUpClick = (event)=>{
        let upText = text.toUpperCase();
        setText(upText);
    } 

    const handlelowerClick = (event)=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    } 

    const handleEmptyClick = (event)=>{
        setText("");
    }

    const handleRevsrseClick = (event)=>{
        let lowerText = text.split(" ").reverse().join(" ");
        setText(lowerText);
    } 

    const handleCopy = (event)=>{
        navigator.clipboard.writeText(text);
        props.showAlert("copy successful 🎉","success")
    } 

    const handleExtraSpaces = (event)=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    } 

    const handleRange = (event)=>{
        let newTextSize = document.getElementById("customRange1").value;
        setCurrentTextSize(newTextSize);
    } 

  return (
    <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h2 className='my-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} 
                                                            style={{color: props.mode==='light'?'black':'white',
                                                                backgroundColor: props.mode==='light'?'white':'#13466e',
                                                                border: props.mode==='light'? '4px solid grey':'4px solid wheat',
                                                                fontSize: currentTextSize+'px',
                                                                height: 180,
                                                            }} onChange={handleOnChange} 
                                                            placeholder="Enter the Text" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-2 my-1" disabled={text.length===0} onClick={handlelowerClick}>Convert to Lowercase</button> 
            <button className="btn btn-success mx-2 my-1" disabled={text.length===0} onClick={handleEmptyClick}>Clear TextArea</button>
            <button className="btn btn-warning mx-2 my-1" disabled={text.length===0} onClick={handleRevsrseClick}>Inverse Text</button>
            <button className="btn btn-info mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-secondary mx-2 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <input type="range" className="form-range-track-width: 15% my-1" disabled={text.length===0} value={currentTextSize} onChange={handleRange} min="8" id="customRange1"/>
        </div>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h2 className='my-4'>Your Text Summary: </h2>
            <p>{text.split(/\s+/).filter((arrayElement)=>{return arrayElement.length!==0}).length} words and {text.length} characters</p>
            <p>Average Time required to read text is {text.split(/\s+/).filter((arrayElement)=>{return arrayElement.length!==0}).length * 0.008} minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview !"}</p>
        </div>
    </>
  )
}

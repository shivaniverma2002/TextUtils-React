import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase","success");
    }
    const handleclearClick = () => {
        console.log("clear text" + text);
        let newText = "";
        setText(newText);
        props.showAlert("clear the text","success");
    }
    
    const handleonChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
       navigator.clipboard.writeText(text.value);
       props.showAlert("copy to clipboard","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removing space Successfully","success");
    }
    const [text, setText] = useState('');
    // text="new text";//wrong way to change the state
    // setText="new text";//correct way to change the state
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>

                <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text summary</h1>
                <p> {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the text above to preview it here"}</p>
            </div>
        </>
    )
}


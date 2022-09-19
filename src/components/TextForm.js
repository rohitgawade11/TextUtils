import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!");
    }

    return (
        <>
            <div className="container">
                <h1 className='mb-4'>{props.heading}</h1>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/uppercase">Uppercase</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/lowercase">Lowercase</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/remove-extra-space">Remove Extra Space</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/find-and-replace">Find and Replace</a>
                    </li>
                </ul>
                <div className="row my-5">
                    <div className="col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="myBox" className='form-label' style={{ fontWeight: "500", fontSize: "1.4rem" }}>Enter your text here :</label>
                            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                            <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-success">Submit</button>
                            </div>
                     
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="myOutput" className='form-label' style={{ fontWeight: "500", fontSize: "1.4rem" }}>Output :</label>
                            <textarea className="form-control" value={text} readOnly style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myOutput" rows="8"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container" style={{color:'black'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <label htmlFor="myBox" className='form-label' style={{fontWeight:"500",fontSize:"1.4rem"}}>Enter your text here :</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Summary of Your Text</h2>
            <p>Number of Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p>Number of Characters : {text.split(/\w/).length - 1} characters</p>
            <h2 style={{textAlign:"center"}}>Preview</h2>
            <textarea className="form-control" readOnly value={text.length > 0 ? text : "Nothing to preview"} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} id="previw" rows="4"></textarea>
        </div> */}
        </>
    )
}
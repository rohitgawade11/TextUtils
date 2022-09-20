import React, { useContext } from 'react';
import TextContext from '../text context/TextContext';
import TextUtils from './TextUtils';
import { useLocation } from 'react-router-dom';

export default function TextForm(props) {
    const location = useLocation();
    const { clickEvent, example } = props;
    const context = useContext(TextContext);
    const { text, handleOnChange } = context;


    return (
        <>
            <div className="container">
                <h1 className='mb-4'>Try TextUtils - word counter, character counter, remove extra spaces</h1>
                <TextUtils />
                <div className="row my-5">
                    <div className="col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="myBox" className='form-label' style={{ fontWeight: "500", fontSize: "1.4rem" }}>Enter your text here :</label>
                            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-success" onClick={clickEvent}>Submit</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="myOutput" className='form-label' style={{ fontWeight: "500", fontSize: "1.4rem" }}>Output :</label>
                            <textarea className="form-control" value={text} readOnly style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myOutput" rows="8"></textarea>
                            <div className="d-flex mt-3">

                                <p className=' mx-2'>Words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
                                <p className=' mx-2'>Characters : {text.split(/\w/).length - 1}</p>
                                <button className="btn btn-outline-success mx-2">Copy Text</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 my-2">
                        <h2><i className="fa-regular mx-2 fa-file-lines"></i>Examples</h2>
                    </div>
                    <div className="col-xl-6 my-2">
                        <div className="card">
                            <div className="card-header bg-success text-light fw-bold">Text</div>
                            <div className="card-body">{location.pathname === '/remove-extra-space' ? '' : example.ex}
                                {location.pathname === '/remove-extra-space' && <p>This &nbsp;&nbsp; text has &nbsp;&nbsp;&nbsp; lot &nbsp;&nbsp;&nbsp; of extra &nbsp;&nbsp;&nbsp;&nbsp;spaces</p>}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 my-2">
                        <div className="card">
                            <div className="card-header bg-success text-light fw-bold">Output</div>
                            <div className="card-body">{example.op}</div>
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
import React, { useContext } from 'react';
import TextContext from '../text context/TextContext';
import TextUtils from './TextUtils';
import { useLocation } from 'react-router-dom';

export default function TextForm(props) {
    const location = useLocation();
    const { clickEvent, example } = props;
    const context = useContext(TextContext);
    const { text, handleOnChange, find, replace, setFind, setReplace, handleClearClick, handleCopy } = context;

    const handleOnChangeFind = (event) => {
        setFind(event.target.value);
    }
    const handleOnChangeReplace = (event) => {
        setReplace(event.target.value);
    }

    return (
        <>
            <div className="container">
                <h1 className='mb-4'>TextUtils - word counter, character counter, remove extra spaces</h1>
                <TextUtils />
                <div className="row my-5">
                    <div className="col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="myBox" className='form-label' style={{ fontWeight: "500", fontSize: "1.4rem" }}>Enter your text here :</label>
                            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                            <div className="d-flex column justify-content-center mt-3">
                                {location.pathname === '/find-and-replace' &&
                                    <div className='d-flex'>
                                        <input type="text" value={find} name="find" placeholder='find' onChange={handleOnChangeFind} id="find" className="form-control mx-1" />
                                        <input type="text" value={replace} name="replace" placeholder='replace' onChange={handleOnChangeReplace} id="replace" className="form-control mx-1" />
                                    </div>}
                                <div className='self-center'>
                                    <button className="btn btn-success mx-1" disabled={location.pathname === '/find-and-replace' ? find.length === 0 || text.length === 0 : text.length === 0} onClick={clickEvent}>Submit</button>
                                    <button className="btn btn-danger" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="mb-3">
                            <label htmlFor="myOutput" className='form-label' style={{ fontWeight: "500", fontSize: "1.4rem" }}>Output :</label>
                            <textarea className="form-control" value={text} readOnly style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myOutput" rows="8"></textarea>
                            <div className="d-flex column justify-content-around mt-3">

                                <p className=' mx-2'>Words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
                                <p className=' mx-2'>Characters : {text.split(/\w/).length - 1}</p>
                                <button className="btn btn-success mx-2" disabled={text.length === 0} onClick={handleCopy}>Copy to clipboard</button>
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
        </>
    )
}
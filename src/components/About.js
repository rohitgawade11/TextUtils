import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {

  return (
    <>
      <div className="container">
        {/* <div className="card py-3 text-center" style={{ backgroundColor: "transparent" }}>
          <h2 className='h1'>TextUtils - word counter, character counter, remove extra spaces</h2>
        </div> */}
         <h2 className='h1 text-center'>TextUtils - word counter, character counter, remove extra spaces</h2>
        <div className='my-5'>
          <h2>How TextUtils Works ?</h2>
          <p className='my-4 px-5 py-4 border-start border-5 border-dark text-light' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>Dealing with texts is a common day-to-day activity. Here you can find all the text utilities to help you in performing your activity much faster. This includes tools to remove extra spaces, find and replace, case converter, and many others.</p>
        </div>
        <div className="my-5">
          <h2>Tools available on TextUtils</h2>
          <div className='border-start border-5 border-dark text-light p-5 mt-3' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
            <div className="mb-4">
              <h4>Case Converter</h4>
              <p>This tool can be used to quickly convert your text between different cases.</p>
              <button className="btn btn-outline-info btn-sm"><Link className='text-decoration-none text-light' to='/'>Case Converter</Link></button>
            </div>
            <div className="mb-4">
              <h4>Find and replace</h4>
              <p>This online tool can be used to quickly replace text in your data.</p>
              <button className="btn btn-outline-info btn-sm"><Link className='text-decoration-none text-light' to='/find-and-replace'>Find and replace</Link></button>
            </div>
            <div className="mb-4">
              <h4>Remove extra spaces</h4>
              <p>This tool can be used to remove extra space from a text.</p>
              <button className="btn btn-outline-info btn-sm"><Link className='text-decoration-none text-light' to='/remove-extra-space'>Remove extra spaces</Link></button>
            </div>
            <div className="mb-4">
              <h4>Character Counter</h4>
              <p>This tool can be used to count how many characters a text has.</p>
              <button className="btn btn-outline-info btn-sm"><Link className='text-decoration-none text-light' to='/'>Characters counter</Link></button>
            </div>
            <div className="mb-4">
              <h4>Words Counter</h4>
              <p>This tool can be used to count how many words a text has.</p>
              <button className="btn btn-outline-info btn-sm"><Link className='text-decoration-none text-light' to='/'>Words counter</Link></button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

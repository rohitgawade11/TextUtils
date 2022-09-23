import React from 'react'

export default function About() {
    
  return (
    <>
    <div className="container">
        <div className="card py-3 text-center" style={{backgroundColor:"transparent"}}>
            <h1>TextUtils - word counter, character counter, remove extra spaces</h1>
        </div>
        <div className='my-5'>
            <h2>How TextUtils Works ?</h2>
            <p className='my-4 p-3 border-start border-5 bg-dark text-light'>Dealing with texts is a common day-to-day activity. Here you can find all the text utilities to help you in performing your activity much faster. This includes tools to remove duplicates, specific strings accents from a text, sort lines, remove line breaks, and many others.</p>
        </div>
    </div>
    </>
  )
}

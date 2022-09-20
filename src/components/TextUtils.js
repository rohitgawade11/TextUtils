import React from 'react'
import { Link } from 'react-router-dom'

export default function TextUtils() {
  return (
    <div className="container">
         <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Uppercase</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/lowercase">Lowercase</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/remove-extra-space">Remove Extra Space</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/find-and-replace">Find and Replace</Link>
                    </li>
                </ul>
    </div>
  )
}

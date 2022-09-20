import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function TextUtils() {
    const location = useLocation();
    console.log(location);

    return (
        <div className="container">
            {/* <ul className="nav justify-content-center">
                    <li className="nav-item ">
                        <Link className={`nav-link text-utils ${location.pathname === '/' ? 'first' : ''}`} to="/">Uppercase</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className={`nav-link text-utils ${location.pathname === '/lowercase' ? 'first' : ''}`} to="/lowercase">Lowercase</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className={`nav-link text-utils ${location.pathname === '/remove-extra-space' ? 'first' : ''}`} to="/remove-extra-space">Remove Extra Space</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className={`nav-link text-utils ${location.pathname === '/find-and-replace' ? 'first' : ''}`} to="/find-and-replace">Find and Replace</Link>
                    </li>
                </ul> */}
            <ul className="list-group list-group-horizontal justify-content-center">
                <li className={`list-group-item ${location.pathname === '/' ? 'first' : ''}`} >
                    <Link className="text-utils" to="/">Uppercase</Link>
                </li>
                <li className={`list-group-item ${location.pathname === '/lowercase' ? 'first' : ''}`}>
                    <Link className="text-utils" to="/lowercase">Lowercase</Link>

                </li>
                <li className={`list-group-item ${location.pathname === '/remove-extra-space' ? 'first' : ''}`}>
                    <Link className="text-utils" to="/remove-extra-space">Remove Extra Space</Link>
                </li>
                <li className={`list-group-item ${location.pathname === '/find-and-replace' ? 'first' : ''}`}>
                        <Link className="text-utils" to="/find-and-replace">Find and Replace</Link>
                    </li>
            </ul>

        </div>
    )
}

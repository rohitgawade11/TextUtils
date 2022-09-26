import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function TextUtils() {
    const location = useLocation();


    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
                <div className="btn-group d-flex flex-wrap">
                    <Link className={`btn btn-outline-info ${location.pathname === '/' ? 'active' : ''}`} to="/">Uppercase</Link>
                    <Link className={`btn btn-outline-info ${location.pathname === '/lowercase' ? 'active' : ''}`} to="/lowercase">Lowercase</Link>
                    <Link className={`btn btn-outline-info ${location.pathname === '/remove-extra-space' ? 'active' : ''}`} to="/remove-extra-space">Remove Extra Space</Link>
                    <Link className={`btn btn-outline-info ${location.pathname === '/find-and-replace' ? 'active' : ''}`} to="/find-and-replace">Find and Replace</Link>
                </div>
            </div>
        </div>
    )
}

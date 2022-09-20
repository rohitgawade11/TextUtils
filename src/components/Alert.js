import React,{useContext} from 'react'
import TextContext from '../text context/TextContext';

function Alert(props) {
    const context = useContext(TextContext)
    const {alert} = context;
    return (
        <div style={{height: '50px'}}>
        {alert && <div className={`alert alert-success alert-dismissible fade show position-fixed top-0 w-100`} role="alert">
           <strong>{alert} </strong>
        </div>}
        </div>
    )
}

export default Alert
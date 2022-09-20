import React,{useState} from 'react';
import TextContext from './TextContext';

export default function TextItems(props) {
    const [alert, setAlert] = useState(null);
    const [text, setText] = useState('');

    const showAlert = (message)=>{
        setAlert(message)
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        showAlert("Converted to uppercase!");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        showAlert("Converted to lowercase!");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        showAlert("Text Cleared!");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Copied to Clipboard!");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        showAlert("Extra spaces removed!");
    }

 
  return (
    <TextContext.Provider value={{alert,text,showAlert,handleUpClick,handleLoClick,handleOnChange,handleCopy,handleExtraSpaces}}>
  {props.children}
    </TextContext.Provider>
  )
}

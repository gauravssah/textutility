import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here...');

    const handalUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handalLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handalCTClick = () => {
        // let newText = '';
        setText('');
    }

    const handalOnchange = (event) => {
        setText(event.target.value)
    }

    const handalCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handalExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    return (
        <>
            <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`} id="myBox" value={text} onChange={handalOnchange} rows="15"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handalUpClick} >Convert to UpperCase</button>
                <button className='btn btn-primary mx-3' onClick={handalLoClick} >Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handalCTClick} >Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handalCopy} >Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handalExtraSpaces} > Remove Extra spaces</button>

            </div>

            <div className="container my-3 py-2 px-4 border border-secondary rounded bg-secondary text-white">
                <h2>Your text Summary:</h2>

                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Time Required to Read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}

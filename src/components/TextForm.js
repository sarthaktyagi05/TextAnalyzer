import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
   const handleUpClick = ()=>
   {
      let newText=text.toUpperCase();
      setText(newText);
   }
   const handleLoClick = ()=>
   {
      let newText=text.toLowerCase();
      setText(newText);
   }
   const handleclear = ()=>
   {
      let newText="";
      setText(newText);
   }
   const handleOnChange = (event) =>
   {
       setText(event.target.value);
   }
   const [text,setText] = useState("Enter text here");
   return (
       <>
        <div className="container">
           <h1>{props.heading}</h1>
           <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleclear}>Reset</button>
        </div>
        <div className="container my-3">
            <h2>your text summary is</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} take minutes to read by a normal person</p>
            <h4>{text}</h4>
        </div>
        </>
    )
}
TextForm.prototype =
{
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps=
{
    heading: "Enter your text here to analyze"
}

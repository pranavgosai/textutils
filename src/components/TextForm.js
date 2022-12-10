import React, {useState} from 'react'



export default function TextForm(props) {
    const handaleUpClick= ()=>{
        console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handaleUpchange= ()=>{
        console.log("On change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('enter text here');
  return (
    <>
    <h1 className="d-flex justify-content-center text-white" >{props.heading}</h1>
    <div>
   <div className="form-group">

    <textarea className="form-control border border-white bg-dark text-white " value={text} onChange={handaleUpchange} id="mybox" rows="10" coulam="" ></textarea>
  </div>
  <button type="button"  className="btn btn-primary"onClick={handaleUpClick}>Convert to uppercase</button>
    </div>
    </>
    
  )
}

import React, { useState } from 'react'



function Textform(props) {

    const [text ,settext] = useState("Enter the text")

    const[preview ,setPreview] = useState("");

    const keyPress = (event)=>{
   
        settext(event.target.value)
    
    }
    const upperCase = ()=>{
       
         settext(text.toUpperCase())

    }
    const lowerCase = ()=>{
       
        settext(text.toLowerCase())

   }
   const clearText = ()=>{
       
    settext("")
    setPreview("")

  }
    const myStyle = {
         "color":props.mode=="dark"? "white":"black"
    }
    const myStyle2 ={
        "color":props.mode=="dark"? "white":"black",
        "backgroundColor":props.mode=="dark"? "#2C2A2A":"white"
    }
 
    return (
     <> <div className='container mt-3' style={myStyle}>
           <h2>Enter Text for Analysis : </h2>
            <div className="mb-3">
                <textarea class="form-control" style={myStyle2} onChange={keyPress} id="exampleFormControlTextarea1" rows="9" value= {text} ></textarea>
            </div>
            <button type="button" onClick={upperCase} className="btn btn-primary me-2 mt-1 ">Convert UpperCase</button>
            <button type="button" onClick={lowerCase} className="btn btn-primary me-2 mt-1">Conver LowerCase</button>
            <button type="button" className="btn btn-primary me-2 mt-1" onClick={event=>setPreview(text)} >Preview</button>
            <button type="button" onClick={clearText} className="btn btn-primary mt-1">Clear All</button>
          
            <h3 className='mt-3' >Text Summary </h3>

            <p> <strong>{text.split(" ").length}</strong> Words and <strong> {text.length}</strong> Characters </p> 
            <p>{ 0.008} Minutes Read </p>

            <h3>Preview</h3>
            <p> {preview} </p>

        </div>
     </>
  )
}

export default Textform

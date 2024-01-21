import React, { useState } from 'react'



function Textform() {

    const [text ,settext] = useState("Enter the text")

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

}
 
    return (
     <> <div className='container mt-3'>
           <h2>Enter Text for Analysis : </h2>
            <div className="mb-3">
                <textarea class="form-control" onChange={keyPress} id="exampleFormControlTextarea1" rows="9" value= {text} ></textarea>
            </div>
            <button type="button" onClick={upperCase} className="btn btn-primary me-2 mt-1 ">Convert UpperCase</button>
            <button type="button" onClick={lowerCase} className="btn btn-primary me-2 mt-1">Conver LowerCase</button>
            <button type="button" className="btn btn-primary me-2 mt-1">Preview</button>
            <button type="button" onClick={clearText} className="btn btn-primary mt-1">Clear All</button>
          
            <h3 className='mt-3' >Text Summary </h3>

            <p> <strong>{10}</strong> Words and <strong> {20}</strong> Characters </p> 
            <p>{ 0.008} Minutes Read </p>

            <h3>Preview</h3>
            <p> {} </p>

        </div>
     </>
  )
}

export default Textform

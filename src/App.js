import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const  [mode,setMode] = useState("light")

  const toggleMode = ()=>{
       
       if(mode == "light"){
          setMode("dark")
          document.body.style.backgroundColor = "#2F2E2E" ;
       }else{
          setMode("light")
          document.body.style.backgroundColor = "white" ;
       }

  }

  return (
    <>
    <Navbar mode = {mode}  toggleMode ={toggleMode} />
    <Textform mode ={mode} />
    </>
  );
}

export default App;

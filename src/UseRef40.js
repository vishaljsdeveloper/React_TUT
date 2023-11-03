import { useRef, useState } from "react";
function UseRef40(){
    let inputRef=useRef(null);
    const [val,setVal]=useState(null);
    const [colors,setColors]=useState(null)
    function handleInput(){
        console.log('useRef hook function called');
         setVal(inputRef.current.value);
         setColors(inputRef.current.style.color='green');
         inputRef.current.style.backgroundColor='black'
         inputRef.current.focus();
        //  inputRef.current.style.display='none';
    }
return(
    <>
    <h1 style={{color:'red'}}>useRef hook used for dom manipulation</h1>
    <h2 style={{color:colors}}>{val}</h2>
    <input type="text" ref={inputRef}/>
    <button onClick={handleInput}>handle Input</button>
    </>
)
}
export default UseRef40;
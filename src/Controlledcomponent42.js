import { useState } from "react";

function Controlledcomponent42 (){
    const [val,setVal]=useState("");
    const [item,setItem]=useState([]);
    function getData(){
        setItem([...item , val ,"," ]);
        setVal("")
    }
    return(
        <>
        <h1>Controlled component using State</h1>
        <h1>{val}</h1>
        <h1>{item}</h1>
        <input type="text"  value={val}  onChange={(e)=>setVal(e.target.value)} />
        {/* defaultValue={111} ko value ki jagah isko bhi use kar sakte hai . ya fir 111 ko val ke initial state me 
        bhi dal sakte hai. lekin value or default value dono ko ek sath use nai kar sakte hai.*/}
        <button onClick={getData}>Empty Inputbox</button>
        </>
    )
}
export default Controlledcomponent42;
import React, { useState, useEffect } from "react";
function Effecthook26() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('useEffect method called')
    },[]);
    useEffect(()=>{
        console.log('useEffect2 method called')
    },[count]);
    return (
        <div>
            <h1>this is use effect and counter is {count}</h1>
            <button onClick={()=>setCount(count+1)}>update Counter2</button>
        </div>
    )
}
export default Effecthook26;
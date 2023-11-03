import React, { useState, useEffect } from "react";
function Effecthook25() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('useEffect called')
    });
    return (
        <div>
            <h1>this is use effect and counter is {count}</h1>
            <button onClick={()=>setCount(1)}>update Counter</button>
        </div>
    )
}
export default Effecthook25;
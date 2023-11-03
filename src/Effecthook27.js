import React, { useState, useEffect } from "react";
function Effecthook27() {
    const [count, setCount] = useState(10)
    const [data, setData] = useState(10)
    useEffect(()=>{
        console.log('useEffect with specific state  is called')
    },[count]);
    return (
        <div>
            <h1>this is use effect and count is : {count}</h1>
            <h1>this is use effect and data is : {data}</h1>
            <button onClick={()=>setCount(count+1)}>update Counter</button>
            <button onClick={()=>setData(data+1)}>update Data</button>
        </div>
    )
}
export default Effecthook27;
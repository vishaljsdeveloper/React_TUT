import React, { useState,} from "react";
import Effectpropchild28 from "./Effectpropchild28";
function Effecthook27() {
    const [count, setCount] = useState(10)
    const [data, setData] = useState(10)
    return (
        <div>
            <Effectpropchild28 counter={count} data={data}/>
            <button onClick={()=>setCount(count+1)}>update Counter</button>
            <button onClick={()=>setData(data+1)}>update Data</button>
        </div>
    )
}
export default Effecthook27;
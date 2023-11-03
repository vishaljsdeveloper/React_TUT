
import { useState } from "react";

function User6()
{
    let[data ,setData]=useState(0);
    function updateData(){
        setData(data+1);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>User6 state change</button>
        </div>
    )
}
export default User6;

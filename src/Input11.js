
import { useState } from "react";

function Input11(){
    const [data , setData] =useState(null)
    function getData(e){
        console.log(e);
    // hum agar bas e ko console log karenge to pura elemet print hoga , agar e.target ko console karenge to input field 
    // milega lekin hame bas value chahiye to e.target.value ko  console karenge or use hi set state me bhi dalenge
    setData(e.target.value);
    }
    return(
<div>
    <h1>{data}</h1>
<input type="text" onChange={getData} />
</div>
    )
}
export default Input11;
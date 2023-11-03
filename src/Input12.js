import { useState } from "react";

function Input12(){
    const [data , setData] =useState(null);
    const [print, setPrint] =useState(false);
    function getData(e){
        console.log(e.target.value);
    // hum agar bas e ko console log karenge to pura elemet print hoga , agar e.tarhet ko console karenge to input field 
    // milega lekin hame bas value chahiye to e.target.value ko  console karenge or use hi set state me bhi dalenge
    setData(e.target.value);
    setPrint(false);
    }
    return(
<div>
        {
            print?<h1>{data} </h1>:null
        }
<input type="text" onChange={getData}/>
<button onClick={()=>setPrint(true)}>Print Data</button>
</div>
    )
}
export default Input12;
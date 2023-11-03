import { useState } from "react";
import Childliftingstateup35 from "./Childliftingstateup35";
function Liftingstateup35(){
    const [item , setItem]= useState('')
    function parentAlert(para){
        alert(para)
        setItem(para)
    }
    return(
        <div>
            <h1>Lifting state up parent component {item} </h1>
            <Childliftingstateup35 name={parentAlert}/>
        </div>
    )
}
export default Liftingstateup35;
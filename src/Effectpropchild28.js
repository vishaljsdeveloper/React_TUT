import React, { useEffect } from "react";
function Effectpropchild28(props) {
    useEffect(()=>{
        console.log('useEffect with specific props  is called')
    },[props.counter]);
    return (
        <div>
            <h1>this is use effect with prop and count is : {props.counter}</h1>
            <h1>this is use effect with prop and data is : {props.data}</h1>
        </div>
    )
}
export default Effectpropchild28;
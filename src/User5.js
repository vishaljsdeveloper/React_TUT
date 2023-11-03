import { useState } from "react";


function User5() {
    let [data, setData] = useState('vishal');
    function updateState() {
        setData('singh');
    }
    function updateState2() {
        setData('kumar');
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateState}>change state</button><br></br>
            <button onClick={updateState2}>change state2</button>
            <button onClick={()=>setData('state change without function')}>change state3</button>
        </div>
    )
}
export default User5; 
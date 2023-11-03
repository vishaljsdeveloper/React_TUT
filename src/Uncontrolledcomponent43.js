import { useRef } from "react";

function Uncontrolledcomponent43() {
    let inputRef1 = useRef()
    let inputRef2 = useRef()
    function submitForm(e) {
        e.preventDefault();
console.log("this is input 1:"  , inputRef1.current.value);
console.log("this is input 2:"  , inputRef2.current.value);
let input3=document.getElementById("input3").value;
console.log("this is input3 manipulationg dom using javascript:" , input3);
// console.log("this is input 1:"  , inputRef1.current.value="");
//iska use karke hum click ke bad input value clear kar sakte hai.
    }
    return (
        <>
            <h1>Uncontrolled component using useRef and javascript DOM manipulation</h1>
            <form>
                <input type="text"  ref={inputRef1}/><br /><br />
                <input type="text" ref={inputRef2}/><br /><br />
                <input type="text" id="input3"/><br /><br />
                <button type="submit" onClick={submitForm}>on Submit</button>
            </form>
        </>
    )
}
export default Uncontrolledcomponent43;
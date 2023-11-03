import ChildforwardRef41 from './ChildforwardRef41';
import {useRef} from 'react';
function ForwardRef41 (){
    const inputRef = useRef(null)
    function changeInput(){
        inputRef.current.value=1000;
        inputRef.current.style.color="green";
        inputRef.current.focus();
    }
return(
    <>
    <h1>Forward Ref: dom manipulating in child using parent</h1>
    <ChildforwardRef41 ref={inputRef}/><br></br>
    <button onClick={changeInput}>update Input</button>
    </>
)
}
export default ForwardRef41;
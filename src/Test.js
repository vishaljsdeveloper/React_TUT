import { useState, useEffect } from "react";

function Test() {
    
  const [state, setState] = useState();
  let output = JSON.parse(localStorage.getItem('output'))
  const [arr, setArr] =useState([output])
    
 console.log(arr)
useEffect(()=>{
    localStorage.setItem('output', JSON.stringify(arr))
},[arr])
function getData(){
  setArr([...arr, state]);
  setState("")
}

  return (
    <div>
      <h1>
        {arr.map((e) => {
      return e + ","
        })}
    

        {/* {state} */}
      </h1>

      <input
        type="text" 
        value={state}
        placeholder="type here"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        onClick={getData}
      >
        button
      </button>
    </div>
  );
}

export default Test;

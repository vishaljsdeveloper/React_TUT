import React from 'react';
// const Toggle13 = ()=>( //using arrow function to make a component. ya hum curly braces ko replace kar rahe hai () is se. 
// //hum chahe to jaise arrow function ko normally use karte hai waise bhi kar sakte hai return ke sath ya return hata sakte.
//         <div>
//             <h1>hello</h1>
//             <button>hide</button>
//             <button>show</button>
//         </div>

// )
function Toggle13() {
    const [status, setStatus] = React.useState(true)//yaha hum react.usestate kar rahe hai kyunki bas react ko
    // import kiya hai . usestate ko import nai kiya hai.
    return (
        <div>
            {
                status?<h1>hello</h1>:null
            }
            <button onClick={()=>setStatus(false)}>hide</button>
            <button onClick={()=>setStatus(true)}>show</button>
        </div>
    )
}
export default Toggle13;
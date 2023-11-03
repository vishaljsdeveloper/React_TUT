import React from 'react';
function Toggle14() {
    const [status, setStatus] = React.useState(true)
    return (
        <div>
            {
                status?<h1>hello</h1>:null
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>
            {/* !status : ye status ke value ko oppsite kar raha hai yani agar status ka value true hai to false and its
             vice versa. is se hum ek hi button se hide show karwa sakte hai.  */}
        </div>
    )
}
export default Toggle14;
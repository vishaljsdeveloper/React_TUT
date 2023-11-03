import { useState } from "react";

function Condition16() {
    const [isLogin, setIsLogin] = useState(false)
    // if(isLogin){
    //     return(
    //         <div>
    //             <h1>hello User</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>hello Guest</h1>
    //         </div>
    //     )  
    // }

    const [Login, setLogin] = useState(1)
    //now we are writing the recomended way. above code is not recomended kyunki usme bar bar return karna par raha hai.
    return (
        <div>
            {/* yaha hum button pe ek hi onClick event  pe 2 ka state change kar rahe hai */}
            <button onClick={() => { setIsLogin(true); setLogin(2) }}>click me</button>
            {isLogin ? <h1>hello User</h1> : <h1>hello Guest</h1>}
            {/* ab hum else if use karke dekhte hai. */}
            {Login === 1 ? <h1>hello User1</h1> : Login === 2 ? <h1>hello User2</h1> : <h1>hello Guest</h1>}
        </div>
    )
}
export default Condition16;
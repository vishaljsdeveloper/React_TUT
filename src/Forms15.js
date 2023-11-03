import { useState } from "react";

function Forms15() {
    const [name, setName] = useState(null)
    const [choice, setChoice] = useState(null)
    const [tc, setTc] = useState(false)
    const [print, setPrint] = useState(false)

    function getData(e) {
        console.log(name, choice, tc)
        e.preventDefault()
        setPrint(true)
    }
    return (
        <div>
            <form onSubmit={getData}>
                <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)}></input><br></br>
                <select onChange={(e) => setChoice(e.target.value)}>
                    <option>Choose</option>
                    <option>thor</option>
                    <option>loki</option>
                    <option>hulk</option>
                </select><br></br>
                <input type="checkbox" onChange={(e) => setTc(e.target.checked)}></input><span>Accept T&C</span><br></br>
                {/* checkbox me e.target.checked liye hai kyunki wo true ya false me value return karta hai */}
                <button type="submit">Submit</button>
            </form>
            {
                print ? <h1>`my name is {name} ,i love {choice} character. i accept all T&C {tc}</h1> : null
            }
        </div>
    )
}
export default Forms15;
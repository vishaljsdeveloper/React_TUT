
import { useMemo, useState } from "react";

function Usememo38() {
    let [count, setCount] = useState(1);
    let [data, setData] = useState(10);
    const multiCountmemo = useMemo(function multiCount() {
        console.log('use memo function called');
        return count * 5;
    }, [count])
    return (
        <div>
            <h1>Use memo hook</h1>
            <h1>{multiCountmemo}</h1>
            <h1>data : - {data}</h1>
            <h1>count : - {count}</h1>
            <button onClick={() => setCount(count+1)}>update count</button>
            {/* yaha par agar count ka setstate ko 2 ar de to ye ek bar hi call hoga uske bad 
            nai kyunki state ka value same hoga to  multicount function call nai hoga . same as pure component.
            agar use memo use nai karte or {multicountmeno} ki jagah {multiCount()} use karte to function data 
            ke state change hone pe bhi re render hota */}
            <button onClick={() => setData(data + 10)}>update data</button>
        </div>
    )
}
export default Usememo38;

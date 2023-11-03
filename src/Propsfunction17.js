function Propsfumction17(props){
    return(
        <div>
            <h1>paasing function as props</h1>
            {/* <button onClick={props.data}>Get Props</button> */}
            <button onClick={()=>props.data()}>Get Props</button>
        </div>
    )
}
export default Propsfumction17;
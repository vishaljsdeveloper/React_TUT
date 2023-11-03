function Members18(props){
    return(
        <div>
            <h1>paasing function as props to another component</h1>
            {/* <button onClick={props.data}>Get Props</button> */}
            <button onClick={()=>props.data()}>Get Props</button>
        </div>
    )
}
export default Members18;
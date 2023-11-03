function Childliftingstateup35(props){
    let data = 'vishal';
    return(
        <div>
            <h1>lifting state up Child component</h1>
            <button onClick={()=>props.name(data)}>click me</button>
        </div>
    )
}
export default Childliftingstateup35;
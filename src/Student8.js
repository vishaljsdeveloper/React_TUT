function Student8(props)
{
return(
    <div style={{backgroundColor:"red", margin:"5px"}}>
        <h1>hello {props.name}</h1>
        <h2>email: {props.email}</h2>
        <h4>address: {props.other.address}</h4>
    </div>
)
}
export default Student8;
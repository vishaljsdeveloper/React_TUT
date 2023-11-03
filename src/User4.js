function User4()
{
    let data ='vishal singh'
    function apple(){
        data='danish'
        alert(data);
    }
    return(
        <div>
        <h1>{data}</h1>
<button onClick={apple}>click me2</button>
{/* <button onClick={()=>alert('alert without any function')}>click me</button>
<button onClick={()=>apple()}>click me</button>
hum dekh sakte hai ki data ko danish karne ke bad bhi hume h1 tag me vishal singh hi mil raha hai yani ki variable 
ka value change nai hua har jagah par. */}
</div>
    )
}
export default User4;
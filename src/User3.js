function User3()
{
    function apple(){
        alert('function called');
    }
    return(
<button onClick={apple}>click me</button>
//<button onClick={()=>alert('alert without any function')}>click me</button>
//<button onClick={()=>apple()}>click me</button>
    )
}
export default User3;
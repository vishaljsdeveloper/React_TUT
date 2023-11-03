function Handlearraylist31() {
    const students = ['Ram', "Raj", "mohan", "ravi"];
    const user = [
        { name: 'vishal', email: 'vishal@test.com', contact: 111 },
        { name: 'raj', email: 'raj@test.com', contact: 222 },
        { name: 'sonu', email: 'sonu@test.com', contact: 333 },
        { name: 'riya', email: 'riya@test.com', contact: 444 }
    ]
    //using map for looping:-
    // students.map((item)=>{
    //     console.log("my name is" , item); 
    // })

    //using for loop
    // for(let i=0;i<students.length;i++){
    //     console.log("in for loopname is" , students[i]);
    // }
    return (
        <div>
            <h1>Handle array with list </h1>
            {
                students.map((item , index) => {
                    return <h1 key={index}>my name is  {item}</h1>
                    //agar yaha return nai likhna hai to curly braces hata do kyunki ek hi statement hai to apne aap return ho jayga. 
                    //for loop return me kaam nai karta hai isliye hamesha map ,filter,reduce ye sab use karna parta hai.            
                })
            }
            <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'dotted'}}>
                <caption>table example</caption>
                <thead>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>contact</th>
        </tr>
        </thead>
        <tbody>
            {
                user.map((data, index) => 
                    <tr key={index}>
                        <td >{data.name}</td>
                        <td >{data.email}</td>
                        <td >{data.contact}</td>
                    </tr>
                      
            )
            }
            </tbody>
            </table> 
        </div>
    )
}
export default Handlearraylist31;
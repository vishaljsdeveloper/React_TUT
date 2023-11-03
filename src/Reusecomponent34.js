import Childofreusecomponent34 from './Childofreusecomponent34';
function Reusecomponent34() {
    const user = [
        { name: 'vishal', email: 'vishal@test.com', contact: 111 },
        { name: 'raj', email: 'raj@test.com', contact: 111 },
        { name: 'sonu', email: 'sonu@test.com', contact: 333 },
        { name: 'riya', email: 'riya@test.com', contact: 444 }
    ]
    return (
        <div>
            <h1>Reuse component with list</h1>
            {
            user.map((item)=>
            <Childofreusecomponent34  data={item}/>
            )
        }
        </div>
    )
}
export default Reusecomponent34;
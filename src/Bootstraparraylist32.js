import { Table } from 'react-bootstrap'
function Bootstraparraylist32() {
    const user = [
        { name: 'vishal', email: 'vishal@test.com', contact: 111 },
        { name: 'raj', email: 'raj@test.com', contact: 111 },
        { name: 'sonu', email: 'sonu@test.com', contact: 333 },
        { name: 'riya', email: 'riya@test.com', contact: 444 }
    ]
    return (
        <div>
            <h1>Handle array with list in Bootstrap </h1>
            <Table striped bordered variant='dark'>
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
                    {
                        user.map((data, index) =>
                            data.contact === 111 ?
                                <tr key={index}>
                                    <td >{data.name}</td>
                                    <td >{data.email}</td>
                                    <td >{data.contact}</td>
                                </tr> 
                                : null

                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Bootstraparraylist32;
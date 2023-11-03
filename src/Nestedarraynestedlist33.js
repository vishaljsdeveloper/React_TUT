import { Table } from 'react-bootstrap'
function Nestedarraynestedlist33() {
    const user = [
        {
            name: 'vishal', email: 'vishal@test.com', address: [
                { hn: 20, city: 'noida', country: 'india' },
                { hn: 30, city: 'delhi', country: 'india' },
                { hn: 40, city: 'patna', country: 'india' },
                { hn: 50, city: 'pune', country: 'india' }
            ]
        },
        {
            name: 'raj', email: 'raj@test.com', address: [
                { hn: 25, city: 'noida', country: 'india' },
                { hn: 35, city: 'delhi', country: 'india' },
                { hn: 45, city: 'patna', country: 'india' },
                { hn: 55, city: 'pune', country: 'india' }
            ]
        },
        {
            name: 'sonu', email: 'sonu@test.com', address: [
                { hn: 22, city: 'noida', country: 'india' },
                { hn: 32, city: 'delhi', country: 'india' },
                { hn: 42, city: 'patna', country: 'india' },
                { hn: 52, city: 'pune', country: 'india' }
            ]
        },
        {
            name: 'riya', email: 'riya@test.com', address: [
                { hn: 29, city: 'noida', country: 'india' },
                { hn: 37, city: 'delhi', country: 'india' },
                { hn: 47, city: 'patna', country: 'india' },
                { hn: 59, city: 'pune', country: 'india' }
            ]
        }
    ]
    return (
        <div>
            <h1>Nested list with nested array</h1>
            <Table striped bordered variant='dark'>
                <thead>
                    <tr>
                    <th>Sl no.</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data, index) =>
                            <tr key={index}>
                                <td>{index +1}</td>
                                <td >{data.name}</td>
                                <td >{data.email}</td>
                                <td >
                                    <Table striped bordered variant='dark'>
                                        <thead>
                                            <tr>
                                                <th>house no.</th>
                                                <th>city</th>
                                                <th>country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.address.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.hn}</td>
                                                        <td>{item.city}</td>
                                                        <td>{item.country}</td>
                                                    </tr>)
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Nestedarraynestedlist33;
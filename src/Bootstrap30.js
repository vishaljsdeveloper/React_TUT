import { Button , Alert } from 'react-bootstrap'
function Bootstrap30() {
    return (
        <div>
            <h1>Bootstrap install and use of componenen</h1>
            <Button onClick={() =>alert('hello i am custom bootstrap button')}>BT button</Button>
            <hr></hr>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
            <hr></hr>
        {
        <Alert variant='warning'>
          This is a warning alert—check it out!
        </Alert>
        }
        </div>
    )
}
export default Bootstrap30;
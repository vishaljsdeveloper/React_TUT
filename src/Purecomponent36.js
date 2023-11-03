import React from 'react';

class Purecomponent36 extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'vishal',
            count:0
        }
    }
    render() {
        console.log('render in purecomponent');
        return (
            <div>
                <h1>pure component with state change</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({ name: 'raj' })}>update name</button>
                <button onClick={()=>this.setState({ count: this.state.count+1 })}>updatecount</button>
            </div>
        )
    }
}
export default Purecomponent36;
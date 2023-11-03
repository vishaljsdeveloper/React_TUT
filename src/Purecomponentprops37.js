import React from 'react';
import Childpurecomponent37 from './Childpurecomponentprops37';
class Purecomponentprops37 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'vishal',
            count:0
        }
    }
    render() {
        return (
            <div>
                <Childpurecomponent37 data={this.state.name} counter={this.state.count}/>
                <button onClick={()=>this.setState({ name: 'raj' })}>update name</button>
                <button onClick={()=>this.setState({ count: this.state.count+1 })}>updatecount</button>
            </div>
        )
    }
}
export default Purecomponentprops37;
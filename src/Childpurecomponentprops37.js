import React ,{PureComponent} from 'react';

class Childpurecomponent37 extends PureComponent {
    render() {
        console.log('render in purecomponent with props whose state is changing');
        return (
            <div>
                <h1>pure component with props whose state is changing</h1>
                <h1>{this.props.data}</h1>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}
export default Childpurecomponent37;
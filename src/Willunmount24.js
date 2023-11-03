import React from "react";
import Willunmountchild24 from "./Willunmountchild24";
class Willunmount24 extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>
                {this.state.show?<Willunmountchild24/>:<h1>child component unmounted</h1>}
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child</button>
            </div>
        )
    }
}
export default Willunmount24;
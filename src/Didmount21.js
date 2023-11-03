import React , {Component} from "react";

class Didmount21 extends Component{
    constructor(){
        super();
console.log('didmount constructor');
this.state = {
    school:"iips"
}
    }
    componentDidMount(){
        console.log('component Did Mount method ');
    }
    render(){
        console.log('didmount render');
        return(
            <div>
                <h1>component Did Mount . current State {this.state.school}</h1>
                <p>only render method will be call on state change.</p>
                <button onClick={()=>this.setState({school:"vkv"})}>state change</button>
            </div>
        )
    }
}
export default Didmount21;
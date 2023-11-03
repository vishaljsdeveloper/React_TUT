import React , {Component} from "react";

class Didupdate22 extends Component{
    constructor(){
        super();
console.log('didupdate constructor');
this.state = {
    company:"mahindra",
    count:0
}
    }
    componentDidUpdate(preprops, prestate, snapshot){
        console.log('component Did Update method ',prestate.company,this.state.company);
        if(prestate.company===this.state.company){
            alert('data is same')
        }
    
    }
    render(){
        console.log('didupdate render');
        return(
            <div>
                <h1>component Did Update . current State {this.state.company}</h1>
                <p> render method and didupdate will be call on state change.</p>
                <button onClick={()=>this.setState({company:"tata"})}>update company</button>
            </div>
        )
    }
}
export default Didupdate22;
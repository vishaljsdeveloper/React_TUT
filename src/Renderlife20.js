import React, { Component } from "react";

class Renderlife20 extends Component{
    constructor(){
        super();
        this.state = {
            email:"vishal@gmail"
        }
    }
render()
{
    console.log('render lifecycle' + this.state.email)
    return(
        <div>
            <h1>this is render life cycle. state is  {this.state.email} . re render on click</h1>
            <button onClick={()=>this.setState({email:"singh@yahoo"})}>Re render</button>
        </div>
    )
}
}
export default Renderlife20;
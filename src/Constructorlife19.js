import React, { Component } from "react";

class Constructorlife19 extends Component{
    constructor(){
        super();
        console.log('constructor called first')
        this.state = {
            data:"vishal"
        }
    }
render(){
    console.log('render called after constructor')
    return(
        <div>
            <h1>this is constructor life cycle. state is  {this.state.data}</h1>
        </div>
    )
}
}
export default Constructorlife19;
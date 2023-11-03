import React, { Component } from 'react';

class User7 extends Component {
    constructor() {
        super();
        this.state = {
            data: 'anil',
            num:1
        }
    }
    apple(){
        this.setState({data:'vishal'});
        this.setState({num:this.state.num+1});
    }
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <h1>{this.state.num}</h1>
                <button onClick={()=>this.apple()}>class state</button>
            </div>
        )
    }
}
export default User7;
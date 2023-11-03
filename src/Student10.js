import React from 'react';

export default class Student10 extends React.Component{
    render()
    {
        console.log(this.props);
return(
    <div style={{backgroundColor:'green', margin:"5px"}}>
        <h1>hello {this.props.name}</h1>
        <h4>hello {this.props.email}</h4>
    </div>
)
    }
};

import React , {Component} from "react";

class Shouldupdate23 extends Component{
    constructor(){
        super();
console.log('Shouldupdate constructor');
this.state = {
    count:0
}
    }
    shouldComponentUpdate(){
        console.log('Should component Update method ', this.state.count);
        // is line tak ye console me update to ho raha hai lekin ui me nai dikh raha hai kyunki iska default value
        // false hota hai. jab value false hoga to ye render nai hone dega component ko or ui me updation nai dikhega. 
        // isko dekhne ke liye (render karwane ke lie)hum return true karwa sakte hai ya koi condtion pe true 
        // karwa sakte hai.for ex= agar count ka value 5 se 10 ke bich me hai tab hi render karo .
        //abhi console me render ka console bhi nai dikh raha haikyunki render nai ho raha hai.

        //return true;

        //ab ye har bar render hoga kyunki isko true return kar rahe hai. hum kisi condition pe bhi true karwa sakte hai
        //is se application ka performance badhta hai. agar return false karenge to default ke jaisa hi behave karega.

        if(this.state.count>5 && this.state.count<10){
            return true
        }
        else{
            return false
        }
    }
    render(){
        console.log('Shouldupdate render');
        return(
            <div>
                <h1>shouldComponentUpdate . current State{this.state.count} </h1>
                <p> if shouldComponentUpdate is set true then only render and componentdidupdate will run</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
            </div>
        )
    }
}
export default Shouldupdate23;
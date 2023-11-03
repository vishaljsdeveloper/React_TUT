import React,{Component , createRef} from 'react';

class Ref39 extends Component{
    constructor(){
        super();
        this.inputRef=createRef()
    }
    // componentDidMount(){
    //     console.log(this.inputRef.current.value="1000")
    // }
    getData() {
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="black";
    }
    render(){
        return(
            <div>
                <h1>Ref in React js Class component</h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getData()}>ref button</button>
            </div>
        )
    }
}
export default Ref39;
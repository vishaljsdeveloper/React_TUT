import React from "react";
class Willunmountchild24 extends React.Component {
    componentWillUnmount(){
        console.log('componentWillUnmount called');
        alert('componentWillUnmount called')
    }

    render() {
        return (
            <div>
                <h1>this is children component of unmount</h1>
            </div>
        )
    }
}
export default Willunmountchild24;
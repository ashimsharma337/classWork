import react from "react";
import reactDom from "react-dom";

class State extends react.Component{
    constructor(){
        super()
        this.state = {        
            msg: "welcome to subscribe!"        //initialize this.state object to maintain state
        };
    }
    handleChange = () => {
        this.setState({
            msg: "Thank you for subscription"
        });
    }
    render(){
        return <div>
                <h1>{this.state.msg}</h1>
                <button onClick = {this.handleChange}>Subscribe</button>
               </div>
    }
}

export default State;
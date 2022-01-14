import react from "react";
import reactdom from "react-dom";

// using class component
// class Props extends react.Component {
//     constructor(){
//         super()
        
        
//     }
//     render() {
//         return <h1>My name is {this.props.name}. I live in {this.props.address}</h1>
//     }
// }

// using functional component
// function Props(props) {
//     const name = props.name;
//     const address = props.address;
//     return <h1>My name is {name}. I live in {address}</h1>
// }

// Props are immutable where as state are mutable

// without destucturing
function Props({name, address}) {
    return <h1>My name is {Props.defaultProps.name}. I live in {address}.</h1>
}
// for default value
Props.defaultProps = {
    name: "John Doe",
    address: "USA"
}
export default Props;
import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ReactDOM  from "react-dom";


class Lifecycle extends react.Component{
      constructor(props){
        super(props)
          console.log("1. I am first call from lifecycle method(constructor)", this.props);
          this.state = {
              name: ""
          };
      }

      handleChange = (e) => {
        const {name, value} = e.target;
           //   console.log(name);
           console.log(value);
        this.setState({
             name: value
        }, () => {
            console.log(this.state);
        });
        
    }
      handleUnmount = () => {
             ReactDOM.render(<h1>This is unmounting</h1>, document.getElementById("app"));
      }
      componentDidMount(){
          console.log("3. I am third call from lifecycle method after render.", this.props)
      }

      componentDidUpdate(){
          console.log("4. I am fourth call from update(componentDidUpdate) of lifecycle method.");
      }

      componentWillUnmount(){
          console.log("5. I am unmounting from DOM...")
      }
  
      render(){
          console.log("2. I am second call from lifecycle method(render).", this.props);
          return(
            <div className="container">
               <label className="col-md-3">Name:</label>
                <div className="col-md-9">
                    <input type="text" className="form-control form-control-sm" onChange={this.handleChange} placeholder="Enter Your name..." name="name"/>
                </div> 
                <button className="btn-primary mt-2"  type="submit">Submit</button>
                <button className="btn-secondary" onClick={this.handleUnmount}>Unmount</button>
            </div>
          )
      }
}

export default Lifecycle;
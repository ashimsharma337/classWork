import react from "react";

class Allproduct extends react.Component{
    constructor(){
        super()
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
        
    }
   
    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    render(){
        console.log(this.state);

        const { error, isLoaded, items } = this.state;
                if (error) {
                return <div>Error: {error.message}</div>;
                } else if (!isLoaded) {
                return <div>Loading...</div>;
                } else {
                    return (
                        <div className="row">
                            {items.map(item => (
                                <div className="card" style={{ width: "318px" }}>
                                    <img src={item.image} style={{  width: "width:100%" }}/>
                                        <div className="card-body">
                                        <h4 className="card-title">{item.title}</h4>
                                        <p className="card-text">Price: ${item.price}</p>
                                        </div>
                                </div>
                            ))}
                        </div>
                        
                    );
                }
    }
}


export default Allproduct;
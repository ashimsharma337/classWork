import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";


class ProductComponent extends Component {
  constructor(props){
      super(props)
  }

  componentDidMount(){
       // After render
       setTimeout(() => {
          // redirect
          this.props.navigate("/admin");
       }, 3000);
  }

  render() {
    return <div></div>;
  }
}

export function Product(){
    const navigate = useNavigate();
    return (<ProductComponent navigate={navigate}></ProductComponent>);
}
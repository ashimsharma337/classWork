import React from "react";
import {Header} from "../header/header_component"



export class Home extends React.Component{
    constructor(){
        super()
    }

    render(){

        return (
            <>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <div className="col-6 bg-success">First Col</div>
                        <div className="col-6 bg-danger">Second Col</div>
                    </div>
                </div>
            </>
        );
    }
}
import React, { Component } from "react";
import ChangeColor from "./changeColor";

export default class AppColor extends Component {
    state = {color:"silver"}

    changeTextColor =(_newColor)=>{
        this.setState({color:_newColor})
       }
   
    render(){
        return(
            <div className='text-center'>
                <h1 style={{color:this.state.color}}>wellcome to custom</h1>
                 <ChangeColor changeTextColor={this.changeTextColor}/>
            </div>
        )
    }
}

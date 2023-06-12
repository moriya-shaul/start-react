import React, { Component } from "react";
export default class Gallery extends Component {
  state = { counter: 0 };
  colors_ar = ["red", "blue", "green", "brown"];
  img_ar = ["cake1", "cake2", "cake3", "cake4"];
  back = () => {
    if (this.state.counter - 1 < 0) {
      this.setState({ counter: 3 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  next = () => {
    if (this.state.counter + 1 > 3) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  };
  render() {
    return(
    <div>
        {/* <div>{this.img_ar[this.state.counter]}</div> */}
        <button onClick={this.back}>BACK</button>
        <img src={"/images/"+this.img_ar[this.state.counter]+".jpg"} width={"200px"}/>
        <button  onClick={this.next}>NEXT</button>
    </div>)
    
  }
}

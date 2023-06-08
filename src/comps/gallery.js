import React, { Component } from "react";
export default class Gallery extends Component {
  state = { counter: 0 };
  colors_ar = ["red", "blue", "green", "brown"];
  //   img_ar = ["/img_058.jpg", "/img_079.jpg", "/img_302.jpg", "/img_706.jpg"];
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
    <div>
      <div style={{ color: this.colors_ar[this.state.counter] }}></div>
        {/* <div>{this.img_ar[this.state.counter]}</div> */}
        <button onClick={this.back}>BACK</button>
        <button onClick={this.next}>NEXT</button>
    </div>;
  }
}

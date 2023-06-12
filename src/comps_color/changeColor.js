import React, { Component } from "react";

export default class ChangeColor extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.changeTextColor("red");
          }}
        >Red
        </button>
        <button
          onClick={() => {
            this.props.changeTextColor("blue");
          }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            this.props.changeTextColor("green");
          }}
        >
          Green
        </button>
      </div>
    );
  }
}

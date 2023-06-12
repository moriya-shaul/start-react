import React, { Component } from "react";
import Counter from "./counter";
import M1 from "./m1";
import Message from "./message";
import Exchange from "./exchange";
import Gallery from "./gallery";
import AppDate from "../comps_date/appDate";

export default class AppHW extends Component {
  render() {
    return (
      <div className="container">
        <Message msg="FIRST 1" bg="turquoise" />
        <Message msg="SECOND 2" bg="pink" />
        <hr />
        <Counter />
        <hr />
        <Gallery />
        <hr />
        <M1 />
        <hr />
        <Exchange />
        <hr/>
        <AppDate/>
      </div>
    );
  }
}

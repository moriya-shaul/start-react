import React, { Component } from "react";

export default class Message extends Component {
  user = "koko";
  render() {
    return (
      <div
        className="p-2"
        style={{ background: this.props.bg, border: "2px solid blue" }}
      >
        <h3>User:{this.user}</h3>
        {/* this.props -> מאפיין אוטומטית שמגיע בקומפנינטה
        ונשלח מקומפ האב כאטרביוט*/}
        <h2>Message: {this.props.msg}</h2>
      </div>
    );
  }
}
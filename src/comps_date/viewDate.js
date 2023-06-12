import { Component } from "react";

export default class ViewDate extends Component {
  state = { days: 999 };
  componentDidMount() {
    this.calcDays(this.props.deadline1);
  }
  componentDidUpdate(_oldProps, _oldState) {
    console.log("comp update by state or props");
    if (_oldProps.deadline1 != this.props.deadline1) {
      console.log(_oldProps, this.props);
      this.calcDays(this.props.deadline1);
    }
  }
  calcDays = (_newDate) => {
    let time = Date.parse(_newDate) - Date.now();
    let newDays = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({ days: newDays });
  };
  render() {
    return (
      <div className="text-center">
        <h2>Countdown to: {this.props.deadline1}</h2>
        <h3>Days: {this.state.days}</h3>
      </div>
    );
  }
}

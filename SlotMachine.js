import React, { Component } from "react";

export default class SlotMachine extends Component {
  render() {
    let { item1, item2, item3 } = this.props;
    console.log(this.props);
    let msg;
    if (item1 === item2 && item2 === item3) {
      msg = (
        <div>
          <h2>winner</h2>
        </div>
      );
    } else {
      msg = (
        <div>
          <h2>not winner</h2>
        </div>
      );
    }
    return (
      <div>
        <h1>{msg}</h1>
      </div>
    );
  }
}

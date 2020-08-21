import React, { Component } from "react";

export default class Game extends Component {
  state = {
    num: 0,
  };
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
      </div>
    );
  }
}

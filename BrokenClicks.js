import React, { Component } from "react";

export default class BrokenClicks extends Component {
  state = {
    clicked: false,
  };
  handleClick = (e) => {
    this.setState({
      clicked: true,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "cliccked" : "not clicked"}</h1>
        <button onClick={this.handleClick}>Clicked</button>
      </div>
    );
  }
}

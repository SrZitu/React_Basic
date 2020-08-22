import React, { Component } from "react";

export default class Excercise extends Component {
  state = {
    num: 1,
  };
  handleClick = (e) => {
    let win = Math.floor(Math.random() * this.props.maxNum) + 1;
    console.log(win);
    this.setState({
      num: win,
    });
  };

  render() {
    return (
      <div className="click">
        {/* this is one way of conditioning
        <h1>Number is:{this.state.num}</h1>
        {this.state.num === 7 && <h1> You Win</h1>}
        {this.state.num !== 7 && (
          <button onClick={this.handleClick}>Select Random Number</button>
        )} */}
        <h1>Number is:{this.state.num}</h1>
        {this.state.num === 7 ? (
          <h1>You Win</h1>
        ) : (
          <button onClick={this.handleClick}>Select Random Number</button>
        )}
      </div>
    );
  }
}

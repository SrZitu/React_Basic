import React, { Component } from "react";

export default class Loops extends Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}

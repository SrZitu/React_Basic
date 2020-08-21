import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          onClick={function () {
            alert("Button clicked");
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

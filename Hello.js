import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    const props = this.props;
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h1>
          ki khobor to {props.to} from {props.from}. Tumi number paiso
          {props.num} r tomar data {props.data} {bangs}{" "}
          <img src={props.img} alt="" />
        </h1>
      </div>
    );
  }
}

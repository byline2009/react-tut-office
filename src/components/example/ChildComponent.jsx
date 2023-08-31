import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    return <div> toi la child: {this.props.parentName}</div>;
  }
}

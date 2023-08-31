import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class MyComponent extends Component {
  state = { name: "Duong", channel: "channel 1" };
  handleOnchange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name'"
            value={this.state.name}
            onChange={(e) => {
              this.handleOnchange(e);
            }}
          ></input>
          <div> my name is {this.state.name}</div>
          <ChildComponent parentName={this.state.name}></ChildComponent>
          <input type="submit" method="get" value="button"></input>
        </form>
      </div>
    );
  }
}

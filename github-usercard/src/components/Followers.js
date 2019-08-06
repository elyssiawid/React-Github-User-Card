import React, { Component } from "react";

export default class Followers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("isaiah", this.props.follower);
    return (
      <div>
        <h1> {this.props.follower.login} </h1>
      </div>
    );
  }
}

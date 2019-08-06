import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("isaiah", this.props.user);
    return (
      <div>
        <h1> {this.props.user.login} </h1>
      </div>
    );
  }
}

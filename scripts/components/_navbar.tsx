import React, { Component } from "react";

interface Props {}

interface State {}

export default class Navbar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="navbar">Navbar</div>;
  }
}

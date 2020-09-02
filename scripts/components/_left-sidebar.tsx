import React, { Component } from "react";

interface Props {}

interface State {}

export default class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="sidebar">Left Sidebar</div>;
  }
}

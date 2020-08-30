import React, { Component } from "react";

interface Props {}

interface State {}

export default class RightSidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="right-sidebar">Right Sidebar</div>;
  }
}

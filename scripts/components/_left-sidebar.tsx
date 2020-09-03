import React, { Component } from "react";
import Button from "react-bootstrap/Button";

interface Props {}

interface State {}

export default class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <div className="offer">
          <img src="/wp-content/uploads/2020/09/Screen-Shot-2020-08-21-at-5.23.31-PM.png" />
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    );
  }
}

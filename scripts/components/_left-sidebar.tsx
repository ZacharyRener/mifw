import React, { Component } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  site_url: string;
}

interface State {
  buildPath: string;
}

export default class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      buildPath: "/wp-content/themes/mifw/mifw/build",
    };
  }

  render() {
    return (
      <div className="sidebar">
        <div className="offer">
          <img src={`${this.props.site_url}/mifw/build/images/offer.webp`} />
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

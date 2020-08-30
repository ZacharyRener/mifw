import React, { Component } from "react";
import Navbar from "../components/_navbar";
import LeftSidebar from "../components/_left-sidebar";
import RightSidebar from "../components/_right-sidebar";
import Footer from "../components/_footer";

interface Props {
  content: string;
}

interface State {}

export default class Page extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  /*
  TODO: Create navbar component, and others. Then make it into a theme w/ minified js and test speeds
*/
  render() {
    return (
      <div className="parent">
        <header>
          <Navbar />
        </header>
        <div className="left-side">
          <LeftSidebar />
        </div>
        <main dangerouslySetInnerHTML={{ __html: this.props.content }} />
        <div className="right-side">
          <RightSidebar />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

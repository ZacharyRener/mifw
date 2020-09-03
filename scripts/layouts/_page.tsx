import React, { Component } from "react";
import TheNavbar from "../components/_navbar";
import Sidebar from "../components/_left-sidebar";
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
      <div id="site">
        <header>
          <TheNavbar />
        </header>
        <div id="page-wrapper">
          <img src="/wp-content/uploads/2020/09/gettyimages-1135356657-2048x2048-1.png" />
          <div className="container">
            <div className="row">
              <div className="col-md-4 sidebar">
                <Sidebar />
              </div>
              <main
                className="col-md-8 main"
                dangerouslySetInnerHTML={{ __html: this.props.content }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

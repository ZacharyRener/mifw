import React from "react";
import ReactDOM from "react-dom";
import Page from "./layouts/_page";

const samplePage = (bodyClass: string): void => {
  const _content: string = document.getElementById("content")!.innerHTML;
  ReactDOM.render(<Page content={_content} />, document.querySelector("#root"));
};

export default samplePage;

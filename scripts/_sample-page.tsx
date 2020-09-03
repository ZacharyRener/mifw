import React from "react";
import ReactDOM from "react-dom";
import Page from "./layouts/_page";

const samplePage = (bodyClass: string): void => {
  const _content: string = document.getElementById("content")!.innerHTML;
  const _site_url: string = document.getElementById("site_url")!.innerHTML;
  ReactDOM.render(
    <Page content={_content} site_url={_site_url} />,
    document.querySelector("#root")
  );
};

export default samplePage;

import "../styles/main.scss";
import load from "./_loader";
import samplePage from "./_sample-page";

document.addEventListener("DOMContentLoaded", () => {
  let bodyClass, callback;
  load((bodyClass = "home"), (callback = samplePage));
});

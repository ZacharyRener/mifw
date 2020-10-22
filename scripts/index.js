import { polyfill } from 'es6-promise'; polyfill();
import "./../styles/main.scss";
import load from "./load";
import 'bootstrap'
import 'promise-polyfill/src/polyfill';
require('isomorphic-fetch');


import Home from "./Home.svelte";

const home = () => {
  new Home({
    target: document.querySelector("#page-root"),
  })
}

load("home", home);

import React from "react";
import { createBrowserHistory } from "history";
import { Router as BrowserRouter } from "react-router";
import AboutMe from "./about-me";
import Outline from "../outline/outline";

const browserHistory = global.window
  ? createBrowserHistory()
  : { listen: () => {}, location: { pathname: "" } };
const routes = [
  { path: "/react-boston/about-me", name: "About me", component: AboutMe },
];

const ReactBoston = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Outline routes={routes} />
    </BrowserRouter>
  );
};

export default ReactBoston;

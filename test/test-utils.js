import React from "react";
import { createBrowserHistory } from "history";
import { render as rtlRender } from "@testing-library/react";
import { Router as BrowserRouter } from "react-router";

const browserHistory = createBrowserHistory();

export const render = ui => {
  return rtlRender(
    <BrowserRouter history={browserHistory}>{ui}</BrowserRouter>
  );
};

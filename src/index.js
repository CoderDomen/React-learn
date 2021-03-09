import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import APP from "./App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <APP />
  </BrowserRouter>,
  document.getElementById("root")
);

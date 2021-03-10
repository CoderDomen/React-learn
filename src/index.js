<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'

import APP from './APP.jsx'

ReactDOM.render(<APP />,document.getElementById('root'))
=======
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
>>>>>>> b395f0a6ba2313dcfb6efa4058f7b76e747e791a

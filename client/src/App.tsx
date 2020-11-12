import React, { Fragment } from "react";

import "antd/dist/antd.css";
import { LayoutComponent } from "./components/Layout/LayoutComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes/Routes";

function App() {
  return (
    <Fragment>
      <Router>
        <LayoutComponent>
          <Routes />
        </LayoutComponent>
      </Router>
    </Fragment>
  );
}

export default App;

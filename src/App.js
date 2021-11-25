import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import Home from './views/Home';
import Login from './views/Login';
import Previewapp from './views/Previewapp';
import Preview from "./views/Previewapp";

export default function App() {
  return (
    <Router>
      <Fragment>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element= {<Login />}>
          </Route>
          <Route path="/preview" element= {<Previewapp />}>
          </Route>
          <Route path="/" element= {<Home />}>
          </Route>
        </Routes>
        </Fragment>
    </Router>
  );
}




/**/

/*const Li = () => {
  return (
    <li>valor</li>
  )
}

const App = () => {
  const valor = 'honguito'
  return (
  <ul className="clase-css">
    Myco App { valor }</ul>
  );
}

export default App;*/

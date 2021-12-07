import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';
//import './main.css'
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import Home from './views/Home';
import Login from './views/Login';
import injectContext from "./store/appContext";
import CollabForm from "./views/CollabForm";
import Mushroom from "./views/Mushroom";
import Firstview from "./views/Firstview";
import Register from "./views/Authregister";
//import Preview from "./views/Previewapp";

const App = () => {
  return (
    <Router>
      <Fragment>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element= {<Login />}>
          </Route>
          <Route path="/firstview" element= {<Firstview />}>
          </Route>
          <Route path="/" element= {<Home />}>
          </Route>
          <Route path="/collabform" element= {<CollabForm />}>
          </Route>
          <Route path="/mushroom" element= {<Mushroom />}>
          </Route>
          <Route path="/register" element= {<Register />}>
          </Route>
        </Routes>
        
        </Fragment>
    </Router>
  );
}

export default injectContext(App)


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

import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MasterRoute from "../src/layout/masterLayout";
import "./App.css";
//import './main.css'
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import Home from "./views/Home";
import Login from "./views/Login";
import injectContext from "./store/appContext";
import CollabForm from "./views/CollabForm";
import Mushroom from "./views/Mushroom";
import Firstview from "./views/Firstview";
//import Register from "./views/Authregister";
import Authregister from "./views/Authregister";
import Observations from "./views/Observations";
import UsersLoginExample from "./views/UsersLoginExample";
import { Navbar } from "./components/Navbar";
import MushObserver from "./views/Observationview";
import UploadImageToS3WithNativeSdk from "./components/UploadImageToS3WithNativeSdk.jsx";


const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
                <Route exact path="/login" component={Login} />
                <MasterRoute exact path="/firstview" component={Firstview} />
                <Route exact path="/" component={Home} />
                <Route exact path="/collabform" component={CollabForm} /> 
                <Route exact path="/register" component={Authregister} />
                <Route exact path="/tester" component={UploadImageToS3WithNativeSdk} />
                <Route exact path="/mushroom" component={Mushroom} />
                <Route exact path="/mushobservation" component={MushObserver} />
                <Route exact path="/observations" component={Observations} />
                <Route exact path="/users" component={UsersLoginExample} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default injectContext(App);

//privadas: collabform, firstview, observations

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

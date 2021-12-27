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
import Firstview from "./views/Firstview";
//import Register from "./views/Authregister";
import Authregister from "./views/Authregister";
import Observations from "./views/Observations";
import UsersLoginExample from "./views/UsersLoginExample";
import { Navbar } from "./components/Navbar";
import MushObserver from "./views/Observationview";
import UploadImageToS3WithNativeSdk from "./components/UploadImageToS3WithNativeSdk.jsx";
import MushroomPleoratus from "./views/MushroomPleurotus";
import MushroomParis from "./views/MushroomParis";
import MushroomCordyceps from "./views/mushroomCordyceps";
import MushrooTrametes from "./views/MushroomTrametes";
import MushrooPsilocybe from "./views/MushroomPsilocybe";
import MushrooAmanita from "./views/MushroomAmanita";
import MushrooBatarrea from "./views/MushroomBetarrea";
import MushrooClathrus from "./views/MushroomClathrus";
import MushroomGeastrum from "./views/MushroomGeastrum";
import MushroomBispori from "./views/MushrromBisporigera";
import MushroomPhallus from "./views/MushrromPhallus";
import MushroomLentinula from "./views/MushroomLentinula";
import MushroomRamaria from "./views/MushroomRamaria";
import MushroomAuricularia from "./views/MushroomAuricularia";
import MushroomHericium from "./views/MushroomHericium";


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
                <Route exact path="/mushroom-pleoratus" component={MushroomPleoratus} />
                <Route exact path="/mushroom-cordyceps" component={MushroomCordyceps} />
                <Route exact path="/mushroom-trametes" component={MushrooTrametes} />
                <Route exact path="/mushroom-psilocybe" component={MushrooPsilocybe} />
                <Route exact path="/mushroom-amanita" component={MushrooAmanita} />
                <Route exact path="/mushroom-clathrus" component={MushrooClathrus} />
                <Route exact path="/mushroom-geastrum" component={MushroomGeastrum} />
                <Route exact path="/mushroom-batarrea" component={MushrooBatarrea} />
                <Route exact path="/mushroom-bispori" component={MushroomBispori} />
                <Route exact path="/mushroom-lentinula" component={MushroomLentinula} />
                <Route exact path="/mushroom-auricularia" component={MushroomAuricularia} />
                <Route exact path="/mushroom-hericium" component={MushroomHericium} />
                <Route exact path="/mushroom-ramaria" component={MushroomRamaria} />
                <Route exact path="/mushroom-phallus" component={MushroomPhallus} />
                <Route exact path="/mushroom-agaricus" component={MushroomParis} />
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

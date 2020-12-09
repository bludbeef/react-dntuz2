import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";

import Profile from "./components/Profile";
import Maps from "./components/Maps";
import Marketplace from "./components/Marketplace";
import AZKites from "./components/AZKites";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/maps" component={Maps} />
            <Route path="/" component={Home} exact />
            <Route path="/marketplace" component={Marketplace} />
            <Route path="/azkites" component={AZKites} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

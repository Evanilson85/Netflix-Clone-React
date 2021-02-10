import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Filme from "../components/Filme";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filmes/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  );
};

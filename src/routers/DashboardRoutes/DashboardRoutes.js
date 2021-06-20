import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { Navbar } from "../../components/ui/Navbar/Navbar";
import { DCScreen } from "../../components/dc/DCScreen/DCScreen";
import { MarvelScreen } from "../../components/marvel/MarvelScreen/MarvelScreen";
import { HeroScreen } from "../../components/heroes/HeroScreen/HeroScreen";
import { SearchScreen } from "../../components/search/SearchScreen/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

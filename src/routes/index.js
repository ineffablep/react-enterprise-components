// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid";
import RenderPage from "../components/renderPage";

const Routes = ({ routeList }) =>
  <div className="w3-row">
    <Switch>
      {routeList &&
        routeList.map(_ => {
          return _ && _.path
            ? <Route
                exact
                key={uuid.v4()}
                path={_.path}
                render={() => <RenderPage {..._} />}
              />
            : null;
        })}
    </Switch>
  </div>;

export default Routes;

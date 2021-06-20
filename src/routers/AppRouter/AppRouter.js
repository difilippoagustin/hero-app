import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { LoginScreen } from "../../components/login/LoginScreen/LoginScreen";
import { DashboardRoutes } from "../DashboardRoutes/DashboardRoutes";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { PublicRoute } from "../PublicRoute/PublicRoute";

export const AppRouter = () => {
  const {
    userState: { isLogged },
  } = useContext(AuthContext);

  return (
    <>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              exact
              path="/login"
              isAthenticated={isLogged}
              component={LoginScreen}
            />
            <PrivateRoute
              path="/"
              isAthenticated={isLogged}
              component={DashboardRoutes}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

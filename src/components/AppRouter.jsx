import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRouters, privateRouters} from "../router/router";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }
  return (
    isAuth
      ?
      <Switch>
        {privateRouters.map(route =>
          <Route
            component={route.components}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to="/posts"/>
      </Switch>
      :
      <Switch>
        {publicRouters.map(route =>
          <Route
            component={route.components}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to="/login"/>
      </Switch>
  );
};

export default AppRouter;
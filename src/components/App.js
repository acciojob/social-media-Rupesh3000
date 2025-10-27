import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home.js";
import Users from "../pages/Users.js";
import Notifications from "../pages/Notifications.js";
import PostDetails from "../pages/PostDetails.js";

import "../styles/App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/posts/:id" component={PostDetails} />
      </Switch>
    </div>
  );
};

export default App;

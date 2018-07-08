import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

export default () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/login" exact component={Login} />
		<Route path="/signup" exact component={Signup} />
	</Switch>
);

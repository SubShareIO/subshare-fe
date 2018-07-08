import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		console.log("componentWillMount ran");
		fetch("http://localhost:3000").then((response) => response.text()).then((json) => {
			console.log("setting state");
			this.setState({ test: "Logged Out" });
		});
	}

	render() {
		return (
			<div className="Home">
				<div className="lander">
					<h1>SubShare</h1>
					<p>Share your subscription(s) with friends!</p>
					<p className="status"> Status: {this.state.test} </p>
				</div>
			</div>
		);
	}
}

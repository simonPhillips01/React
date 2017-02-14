import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name: "Simon"};
		this.state = {
			title: "Welcome",
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
		const title = "Welcome";
		setTimeout(() => {
			this.setState({name: "Bob"})
		}, 1000);
		
		setTimeout(() => {
			this.setState({title: "Welcome Simon!"})
		}, 2000);
		return (
			<div>
				{this.state.name}
				<Header title={this.state.title} />
				<Header title={"Other Title"} />
				<Header changeTitle={this.changeTitle.bind(this)} />
				<Footer />
			</div>
		);
	}
}
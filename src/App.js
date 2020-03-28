import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";

function App() {
	return (
		<Router>
			<div className="app">
				<aside></aside>
				<header></header>
				<main>
					<section className="main"></section>
					<section className="form">
						<footer></footer>
					</section>
				</main>
			</div>
		</Router>
	);
}

export default App;

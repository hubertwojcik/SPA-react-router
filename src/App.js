import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import "./styles/App.scss";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Main from "./layouts/Main.js";
import Contact from "./layouts/Contact";

function App() {
	const { location } = useContext(__RouterContext);
	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0, transform: "translate(0,100%)" },
		enter: { opacity: 1, transform: "translate(0,0)" },
		leave: { opacity: 0, transform: "translate(0,-50)" }
	});

	return (
		<div className="app">
			<nav>
				<Navigation />
			</nav>
			<main>
				{transitions.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={item}>
							<Route path="/" component={Header} exact />
							<Route path="/main" component={Main} exact />
							<Route path="/contact" component={Contact} exact />
						</Switch>
					</animated.div>
				))}
			</main>
		</div>
	);
}

export default App;

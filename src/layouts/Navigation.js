import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

import NavButton from "../components/NavButton";

const list = [
	{
		name: "home",
		path: "/",
		exact: true
	},
	{
		name: "main",
		path: "/main"
	},
	{
		name: "contact",
		path: "/contact"
	}
];

const Navigation = () => {
	const menu = list.map(item => (
		<li key={item.name} className="nav-item">
			<NavLink to={item.path} exact={item.exact ? item.exact : false}>
				<NavButton />
			</NavLink>
		</li>
	));

	return (
		<div className="nav">
			<ul className="nav-list">{menu}</ul>
		</div>
	);
};

export default Navigation;

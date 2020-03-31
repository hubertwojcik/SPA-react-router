import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Tree from "../images/tree.svg";
import Mountain from "../images/mountain.svg";
import Waterfall from "../images/waterfall.svg";

const pages = [
	{
		name: "tree",
		icon: Tree,
		color: "green"
	},
	{
		name: "mountains",
		icon: Mountain,
		color: "white"
	},
	{
		name: "waterfall",
		icon: Waterfall,
		color: "blue"
	}
];

const NatureListPage = () => {
	const list = pages.map(page => (
		<li key={page.name}>
			<Link to={`/main/${page.name}`}>
				<Icon icon={page.icon} fill={page.color} />
			</Link>
		</li>
	));
	return <ul className="main__navigation-list">{list}</ul>;
};

export default NatureListPage;

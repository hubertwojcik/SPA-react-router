import React from "react";
import "../styles/Page.scss";

const Icon = props => {
	return (
		// <svg fill="currentColor"width={props.width}
		// 		height={props.height}>
		// 	<path
		// 		d={props.icon}
		// 		fill={props.color}

		// 	/>
		// </svg>
		<img src={props.icon} alt={props.name} className="imageASD" />
	);
};

export default Icon;

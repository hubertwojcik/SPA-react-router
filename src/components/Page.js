import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/Page.scss";
import img1 from "../images/tree.jpg";
import img2 from "../images/mountain.jpg";
import img3 from "../images/water.jpg";
import Lorem from "../components/Lorem";
import text from "../constans/text";

const Page = props => {
	return (
		<div className="main__container">
			<div className="main__content">
				<div className="main__content-heading">
					<h1>{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</h1>
				</div>
				<div className="main__content-text">
					<Lorem content={text.content} />
				</div>
			</div>
			<div className="main__content-image">
				<div className="card">
					<div className="card__side card__side--front">
						<Switch>
							<Route
								path="/main"
								exact
								render={() => <img src={img1} alt="tree" />}
							/>
							<Route
								path="/main/tree"
								exact
								render={() => <img src={img1} alt="tree" />}
							/>
							<Route
								path="/main/mountains"
								render={() => <img src={img2} alt="mountains" />}
							/>
							<Route
								path="/main/waterfall"
								render={() => <img src={img3} alt="water" />}
							/>
						</Switch>
						{/* Front */}
					</div>
					<div className="card__side card__side--back">
						<h2 className="card__side-heading">
							{props.id.charAt(0).toUpperCase() + props.id.substring(1)}
						</h2>
						<p className="card__side-text">
							<Lorem content={text.picture} />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;

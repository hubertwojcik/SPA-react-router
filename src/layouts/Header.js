import React from "react";
import "../styles/Header.scss";
import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button";
import BgVideo from "../components/BgVideo";
import backgroundVideo from "../images/forest.mp4";

const Header = props => {
	return (
		<PageWrapper>
			<div className="header">
				<div className="bg-video">
					<BgVideo className="bg-video__content" src={backgroundVideo} />
				</div>

				<div className="header-container">
					<h1 className="header__heading">Nature is Cool!</h1>
					<Button type="submit" text="Welcome" className="header__button" />
				</div>
			</div>
		</PageWrapper>
	);
};

export default Header;

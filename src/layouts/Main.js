import React from "react";

import "../styles/Page.scss";
import PageWrapper from "../components/PageWrapper";
// import Navigation from "./Navigation";
import NatureListPage from "../pages/NatureListPage";

import Page from "../components/Page";

const Main = () => {
	return (
		<PageWrapper>
			<div className="main">
				<div className="main__navigation">
					<NatureListPage />
				</div>
				<Page id="Look at this Nature" />
			</div>
		</PageWrapper>
	);
};

export default Main;

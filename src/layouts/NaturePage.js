import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import PageWrapper from "../components/PageWrapper";
import NatureListPage from "../pages/NatureListPage";

import "../styles/Page.scss";

const NaturePage = ({ match }) => {
	return (
		<PageWrapper>
			<div className="main">
				<div className="main__left">
					<NatureListPage />
				</div>
				<Page id={match.params.id} />
			</div>
		</PageWrapper>
	);
};

export default NaturePage;

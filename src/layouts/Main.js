import React from "react";
import { Route } from "react-router-dom";
import "../styles/Page.scss";
import PageWrapper from "../components/PageWrapper";

const Page = () => {
	return (
		<PageWrapper>
			<div className="main">Hello</div>
		</PageWrapper>
	);
};

export default Page;

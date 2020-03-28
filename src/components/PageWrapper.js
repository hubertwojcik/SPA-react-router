import React from "react";

const PageWrapper = ({ children }) => {
	return (
		<div
			style={{
				position: "absolute",
				width: "100%"
			}}
		>
			{children}
		</div>
	);
};

export default PageWrapper;

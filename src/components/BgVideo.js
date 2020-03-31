import React from "react";

const BgVideo = props => {
	return (
		<video className={props.className} autoPlay muted loop>
			<source src={props.src} type="video/mp4" />
		</video>
	);
};

export default BgVideo;

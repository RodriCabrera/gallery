import React from "react";
import { GiBoatFishing } from "react-icons/gi";

const NotFound = () => {
	return (
		<div
			style={{
				height: "70vh",
				padding: "2rem",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<h2 style={{ textAlign: "center" }}>Page not found</h2>
			<GiBoatFishing style={{ fontSize: "5rem", textAlign: "center" }} />
		</div>
	);
};

export default NotFound;

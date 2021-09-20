import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrousel = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const url = `https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&department=Art+of+the+Americas&limit=3&indent=1&offset=${Math.round(
			Math.random() * (200 - 30) + 30
		)}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => console.log("Error:", err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="wrapper">
			<Carousel>
				<Carousel.Item className="banner banner1">
					<h2 className="banner-header">Welcome to Art Latin America</h2>
				</Carousel.Item>
				<Carousel.Item className="banner banner2">
					<h2 className="banner-header">
						Art Latin America's mission is to be a direct nexus between Artists
						and Collectors.
					</h2>
				</Carousel.Item>
				<Carousel.Item className="banner banner3">
					<h2 className="banner-header">Artist or collector, contact us.</h2>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Carrousel;

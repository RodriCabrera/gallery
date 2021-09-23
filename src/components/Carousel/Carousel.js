import React from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrousel = () => {
	return (
		<>
			<Carousel className="wrapper">
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
					<h2 className="banner-header">Please feel free to contact us.</h2>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Carrousel;

import React from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
import banner1 from "./assets/banner1baja.png";
import banner2 from "./assets/banner2baja.png";
import banner3 from "./assets/banner3baja.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrousel = () => {
	return (
		<div className="carousel">
			<Carousel>
				<Carousel.Item className="banner">
					<img
						className="d-block w-100 h-100"
						src={banner2}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item className="banner">
					<img
						className="d-block w-100 h-100"
						src={banner1}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item className="banner">
					<img
						className="d-block w-100 h-100"
						src={banner3}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Carrousel;

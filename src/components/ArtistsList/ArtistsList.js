import React, { useState, useEffect } from "react";
import { Container, Name, Heading } from "./ArtistList.elements";
import { Spinner } from "react-bootstrap";

const ArtistsList = ({ data }) => {
	const [artists, setArtists] = useState([]);
	useEffect(() => {
		// setArtists(data.map((elem) => elem.autor));
		setArtists([...new Set(data.map((elem) => elem.autor))]);
	}, [data]);
	const mapArtists = () => {
		return artists
			.sort()
			.map((name) => <Name key={artists.indexOf(name)}>{name}</Name>);
	};

	return (
		<Container>
			<Heading>Currently featured artists:</Heading>
			{artists.length > 0 ? (
				mapArtists()
			) : (
				<>
					<div className="loading-container">
						<Spinner animation="border" />
						<h3>Loading artists list...</h3>
					</div>
				</>
			)}
		</Container>
	);
};

export default ArtistsList;

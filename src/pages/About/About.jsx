import React from "react";
import { AboutContainer, AboutHeading, AboutText } from "./About.elements";

const About = () => {
	return (
		<AboutContainer>
			<AboutHeading>About Art Latin America</AboutHeading>
			<AboutText>
				The mission of ART LATIN AMERICA is to collect, study and create
				awareness of Latin American art.
			</AboutText>
			<AboutText>
				Our principal objectives are to educate the public and to awake their
				interest in Latin American Artists; to contribute to the understanding
				of Latin America’s cultural production, furthering recognition of the
				region’s cultural and artistic diversity; to share responsibility with
				the national and international community in these efforts by promoting
				artistic exchange between national, regional and international
				institutions and supporting innovative programs that focus on the visual
				arts and Latin American culture.
			</AboutText>
		</AboutContainer>
	);
};

export default About;

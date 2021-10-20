import styled from "styled-components";

export const Container = styled.div`
	padding: 1rem;
	background-color: rgb(238, 238, 238);
	height: calc(100vh - 230px);
	@media screen and (max-width: 900px) {
		height: auto;
	}
`;
export const AboutHeading = styled.h2`
	letter-spacing: 0px;
	margin-bottom: 1rem;
`;
export const AboutText = styled.p`
	font-family: monospace;
	font-size: 1.2rem;
`;

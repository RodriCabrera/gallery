import styled from "styled-components";
import { Link } from "react-router-dom";
export const ItemDetailPageContainer = styled.div`
	background-color: rgb(238, 238, 238);
	padding-top: 2rem;
	min-height: 80vh;
`;
export const ItemDetailPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
export const BackToArtworks = styled(Link)`
	margin: 2rem;
`;
export const DetailContainer = styled.div`
	margin: 1rem;
	/* display: flex; */
	/* justify-content: space-evenly; */
	max-width: 1300px;
	min-height: calc(100vh - 230px);
`;
export const DetailWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;
export const DetailImageContainer = styled.div`
	/* width: 100%; */
`;
export const DetailImage = styled.img`
	max-width: 100%;
	height: auto;
	max-height: 100%;
`;
export const DetailContent = styled.div`
	border: 1px black solid;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	/* width: 100%; */
	height: 100%;
	border-radius: 5px;
	margin-left: 1rem;
	@media screen and (max-width: 900px) {
		margin-left: 0rem;
		margin-top: 1rem;
	}
`;
export const ItemInfo = styled.div`
	margin-bottom: 2rem;
`;
export const BuyPrintsBox = styled.div`
	display: flex;
	flex-direction: column;
`;
export const AddToCartButton = styled(Link)`
	background-color: black;
	color: white;
	font-family: monospace;
	margin: 1rem;
	padding: 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	transition: ease-out 0.3s all;
	&:hover {
		color: #e6e6e6;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

		background-color: #0d0d0d;
	}
`;

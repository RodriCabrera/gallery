import styled from "styled-components";
import { Link } from "react-router-dom";
export const ItemDetailPageContainer = styled.div`
	/* background-color: yellow; */
	background-color: rgb(238, 238, 238);
`;
export const BackToArtworks = styled(Link)`
	margin: 1rem;
`;
export const DetailContainer = styled.div`
	margin: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
export const DetailWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 1rem;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;
export const DetailImageContainer = styled.div`
	width: 100%;
`;
export const DetailImage = styled.img`
	width: 100%;
`;
export const DetailContent = styled.div`
	width: 100%;
	margin: 1rem;
`;
export const ItemInfo = styled.div`
	margin-bottom: 2rem;
`;
export const BuyPrintsBox = styled.div`
	border: 1px black solid;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
`;
export const AddToCartButton = styled(Link)`
	background-color: black;
	color: white;
	font-family: monospace;
	margin: 1rem;
	padding: 0.5rem;
`;

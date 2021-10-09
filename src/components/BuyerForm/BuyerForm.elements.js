import styled from "styled-components";

export const BuyerFormContainer = styled.div`
	/* width: 100%; */
	margin-bottom: 1rem;
`;

export const BuyerFormForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const StyledLabel = styled.label`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: column;
	width: 250px;
`;
export const CheckoutButton = styled.p`
	font-size: 1.3rem;
	font-family: monospace;
	/* background: black; */
	background: ${(props) => (props.disabled ? "#DCDCDC" : "black")};
	padding: 0.6rem;
	color: white;
	width: fit-content;
	cursor: pointer;
	align-self: flex-end;
	&:hover {
		color: ${(props) => (props.disabled ? "white" : "green")};
	}
`;

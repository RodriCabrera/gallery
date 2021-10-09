import React, { useState } from "react";
import {
	BuyerFormContainer,
	BuyerFormForm,
	StyledLabel,
	CheckoutButton,
} from "./BuyerForm.elements";

const BuyerForm = ({ handleCheckout, orderId }) => {
	const [buyerName, setBuyerName] = useState("");
	const [buyerTelephone, setBuyerTelephone] = useState("");
	const [buyerEmail, setBuyerEmail] = useState("");

	const handleNameChange = (e) => {
		setBuyerName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setBuyerEmail(e.target.value);
	};
	const handleTelephoneChange = (e) => {
		setBuyerTelephone(e.target.value);
	};

	const isDataIn = () => {
		return buyerEmail && buyerEmail && buyerTelephone ? true : false;
	};

	const isBtnActive = () => {
		if (isDataIn()) {
			return (
				<CheckoutButton
					onClick={() => handleCheckout(buyerName, buyerEmail, buyerTelephone)}
					to={`/checkout/${orderId}`}
				>
					PLACE ORDER
				</CheckoutButton>
			);
		} else
			return (
				<>
					<CheckoutButton to={"#"} disabled>
						PROCEED TO CHECKOUT
					</CheckoutButton>
				</>
			);
	};
	return (
		<>
			<BuyerFormContainer>
				<BuyerFormForm>
					<h3>Please fill out this form to place the order</h3>
					<StyledLabel>
						Name:
						<input type="text" onChange={handleNameChange} />
					</StyledLabel>
					<StyledLabel>
						Email:
						<input type="text" onChange={handleEmailChange} />
					</StyledLabel>
					<StyledLabel>
						Telephone:
						<input type="number" onChange={handleTelephoneChange} />
					</StyledLabel>
					{isBtnActive()}
				</BuyerFormForm>
			</BuyerFormContainer>
		</>
	);
};

export default BuyerForm;

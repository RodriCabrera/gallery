import React, { useState } from "react";
import {
	BuyerFormContainer,
	BuyerFormForm,
	StyledLabel,
	CheckoutButton,
	StyledInput,
} from "./BuyerForm.elements";

const BuyerForm = ({ handleCheckout, orderId }) => {
	// const [buyerName, setBuyerName] = useState("");
	// const [buyerTelephone, setBuyerTelephone] = useState("");
	// const [buyerEmail, setBuyerEmail] = useState("");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [emailCheck, setEmailCheck] = useState("");

	// const handleNameChange = (e) => {
	// 	// console.log(e.target.value);
	// 	setBuyerName(e.target.value);
	// };
	// const handleEmailChange = (e) => {
	// 	setBuyerEmail(e.target.value);
	// };
	// const handleTelephoneChange = (e) => {
	// 	setBuyerTelephone(e.target.value);
	// };
	const handleChange = (e) => {
		console.log(e.target.value);
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const isDataIn = () => {
		return formState.name && formState.email && formState.phone ? true : false;
	};

	const handleEmailCheck = (e) => {
		setEmailCheck(e.target.value);
	};
	const isMailCorrect = () => {
		return emailCheck === formState.email ? true : false;
	};

	const isBtnActive = () => {
		if (isDataIn() && isMailCorrect()) {
			return (
				<CheckoutButton
					onClick={() => handleCheckout(formState)}
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
						<StyledInput
							type="text"
							name="name"
							value={formState.name}
							onChange={handleChange}
						/>
					</StyledLabel>
					<StyledLabel>
						Telephone:
						<StyledInput
							type="number"
							name="phone"
							value={formState.phone}
							onChange={handleChange}
						/>
					</StyledLabel>
					<StyledLabel>
						Email:
						<StyledInput
							type="text"
							name="email"
							value={formState.email}
							onChange={handleChange}
						/>
					</StyledLabel>
					<StyledLabel>
						Please repeat email:
						<StyledInput
							type="text"
							name="emailCheck"
							value={emailCheck}
							onChange={handleEmailCheck}
						/>
						{isMailCorrect() ? (
							""
						) : (
							<p style={{ color: "red" }}>Check your email</p>
						)}
					</StyledLabel>
					{isBtnActive()}
				</BuyerFormForm>
			</BuyerFormContainer>
		</>
	);
};

export default BuyerForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = (props) => {
	const [quantity, setQuantity] = useState(0);

	const { cart, addItem, isInCart, logCart } = useCartContext();

	const itemId = props.data.accession_number;
	const itemTitle = props.data.title;

	const handleClick = () => {
		if (quantity > 0) {
			isInCart(itemId)
				? console.log("Ya esta en el carrito", cart)
				: addItem(itemId, itemTitle, quantity);
		}
	};

	return (
		<>
			<p style={{ margin: "1rem", fontFamily: "monospace" }}>
				<Link to="/artworks">{"<"}Back to Artworks</Link>
			</p>
			<div className="detail-container">
				<div className="detail-wrapper">
					<div className="detail-image-container">
						<img
							className="detail-image"
							src={`https://openaccess-cdn.clevelandart.org/${props.data.accession_number}/${props.data.accession_number}_web.jpg`}
							alt="caption"
						/>
					</div>
					<div className="detail-content">
						<div>
							<h4>{props.data.title}</h4>
							<h6>{props.data.culture}</h6>
							<p>{props.data.wall_description}</p>
							<p>Extra fact: {props.data.fun_fact}</p>
							<p>Technique: {props.data.technique}</p>
						</div>
						<div className="buyprints">
							<h6>Buy Prints</h6>
							{/* El ItemCount solamente trae la quantity. El botón de ADD TO CART (en este componente),
							tiene la lógica y el link*/}
							<ItemCount setQuantity={setQuantity} />
							{quantity > 0 && (
								<p>
									SELECTED: {quantity} x "{props.data.title}"
								</p>
							)}
							<button className="cart-button" onClick={handleClick}>
								{/* <Link to="/Cart">GO TO CART{cart}</Link> */}ADD TO CART
							</button>
							<button onClick={logCart}>CONSOLE.LOG CART (para testear)</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;

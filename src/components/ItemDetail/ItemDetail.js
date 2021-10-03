import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import {
	AddToCartButton,
	BackToArtworks,
	BuyPrintsBox,
	DetailContainer,
	DetailContent,
	DetailImage,
	DetailImageContainer,
	DetailWrapper,
	ItemDetailPageContainer,
	ItemInfo,
} from "./ItemDetails.elements";

const ItemDetail = ({ data }) => {
	const [quantity, setQuantity] = useState(0);

	const { addToCart } = useCartContext();

	const handleClick = () => {
		if (quantity > 0) {
			addToCart(data, quantity);
		}
	};

	return (
		<>
			<ItemDetailPageContainer>
				<BackToArtworks to="/artworks">{"<"}Back to Artworks</BackToArtworks>
				<DetailContainer>
					<DetailWrapper>
						<DetailImageContainer>
							<DetailImage src={data.image} alt="caption" />
						</DetailImageContainer>
						<DetailContent>
							<ItemInfo>
								<h4>{data.titulo}</h4>
								<h6>
									{data.fecha} | {data.autor}
								</h6>
							</ItemInfo>
							<BuyPrintsBox>
								<h6>Buy Prints</h6>
								<p>A4 Print Price: ${data.precio}</p>

								{/* El ItemCount solamente trae la quantity. El botón de ADD TO CART (en este componente),
							tiene la lógica y el link*/}
								<ItemCount setQuantity={setQuantity} />
								{quantity > 0 && (
									<>
										<AddToCartButton to="/Cart" onClick={handleClick}>
											ADD TO CART
										</AddToCartButton>
									</>
								)}
							</BuyPrintsBox>
						</DetailContent>
					</DetailWrapper>
				</DetailContainer>
			</ItemDetailPageContainer>
		</>
	);
};

export default ItemDetail;

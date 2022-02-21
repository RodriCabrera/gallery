import React from "react";
import { useCartContext } from "../../context/CartContext";
import {
  AddToCartButton,
  BackToArtworks,
  BuyPrintsBox,
  DetailContainer,
  DetailContent,
  DetailImage,
  ItemDetailPageWrapper,
  DetailImageContainer,
  DetailWrapper,
  ItemDetailPageContainer,
  ItemInfo,
} from "./ItemDetails.elements";

const ItemDetail = ({ data }) => {
  const { addToCart } = useCartContext();

  const handleClick = () => {
    // if (quantity > 0) {
    addToCart(data);
    // }
  };
  console.log(data);
  return (
    <>
      <ItemDetailPageContainer>
        <BackToArtworks to="/artworks">{"<"}Back to Artworks</BackToArtworks>
        <ItemDetailPageWrapper>
          <DetailContainer>
            <DetailWrapper>
              <DetailImageContainer>
                <a href={data.image} target="_blank" rel="noreferrer">
                  <DetailImage src={data.image} alt="caption" />
                </a>
              </DetailImageContainer>
              <DetailContent>
                <ItemInfo>
                  <h4>{data.titulo}</h4>
                  <h6>
                    {data.fecha} | {data.autor}
                  </h6>
                </ItemInfo>
                <BuyPrintsBox>
                  <p>A4 Print Price: ${data.precio}</p>

                  {/* El ItemCount solamente trae la quantity. El botón de ADD TO CART (en este componente),
							tiene la lógica y el link*/}
                  {/* <ItemCount setQuantity={setQuantity} /> */}
                  {/* {quantity > 0 && ( */}
                  <>
                    <AddToCartButton to="/Cart" onClick={handleClick}>
                      ADD TO CART
                    </AddToCartButton>
                  </>
                  {/* )} */}
                </BuyPrintsBox>
              </DetailContent>
            </DetailWrapper>
          </DetailContainer>
        </ItemDetailPageWrapper>
      </ItemDetailPageContainer>
    </>
  );
};

export default ItemDetail;

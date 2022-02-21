import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    //Apuntamos a la base de datos:
    const db = getFirestore();
    //Apuntamos a una colección:
    const artworks = db.collection("artworks");
    //Apuntamos a un elemento específico:
    const item = artworks.doc(id);
    //Traemos los datos del elemento específico:
    item
      .get(() => {})
      .then((doc) => {
        if (!doc.exists) {
          console.log("El producto no está disponible");
        } else {
          setData({ id: doc.id, ...doc.data() });
        }
      })
      .catch((err) => console.log("ERROR:", err))
      .finally(() => setloading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <p>Loading...</p>
        <Spinner animation="border" />
      </>
    );
  } else {
    return (
      <div style={{ backgroundColor: "whitesmoke" }}>
        <ItemDetail data={data} />
      </div>
    );
  }
};

export default ItemDetailContainer;

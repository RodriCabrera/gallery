import React from "react";
import ItemDetailContainer from "../containers/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router";

const Details = () => {
	const { id } = useParams();

	return <ItemDetailContainer accession_number={id} />;
};

export default Details;

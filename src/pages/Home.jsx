import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Carrousel from "../components/Carousel/Carousel";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <Carrousel />
      <Announcement />
      <ItemListContainer />
    </>
  );
};

export default Home;

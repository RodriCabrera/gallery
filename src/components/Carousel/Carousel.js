import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore } from "../../firebase";

const Carrousel = () => {
  const [banners, setBanners] = useState();

  useEffect(() => {
    const db = getFirestore();
    db.collection("banners")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBanners(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
      });
  }, []);
  console.log(banners, "BANNERS");

  const getBannerLink = (id) => {
    return banners?.find((banner) => banner.id === id).link;
  };
  const getBannerText = (id) => {
    return banners?.find((banner) => banner.id === id).text;
  };
  console.log(getBannerLink(1));
  return (
    <>
      <Carousel className="wrapper">
        <Carousel.Item
          className="banner banner1"
          style={{ backgroundImage: `url(${getBannerLink(1)})` }}
        >
          <h2 className="banner-header">{getBannerText(1)}</h2>
        </Carousel.Item>
        <Carousel.Item
          className="banner"
          style={{ backgroundImage: `url(${getBannerLink(2)})` }}
        >
          <h2 className="banner-header">{getBannerText(2)}</h2>
        </Carousel.Item>
        <Carousel.Item
          className="banner"
          style={{ backgroundImage: `url(${getBannerLink(3)})` }}
        >
          <h2 className="banner-header">{getBannerText(3)}</h2>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrousel;

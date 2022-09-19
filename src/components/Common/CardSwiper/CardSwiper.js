import React from "react";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AppCard from "../Card/Card";
import { Grid } from "@mui/material";

const CardSwiper = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Grid container xs={12}>
      {/* explicitly provide height in containerClass else it won't render */}
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
      >
        {data.map((d, idx) => (
          <AppCard
            key={idx + d.name}
            id={d.id}
            name={d.name}
            description={d.description_short}
            image={d.images[0]}
            slug={d.slug}
          />
        ))}
      </Carousel>
    </Grid>
  );
};

export default CardSwiper;

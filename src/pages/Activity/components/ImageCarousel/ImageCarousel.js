import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

const ImageCarousel = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
      >
        {images.map((image, idx) => (
          <div
            container
            style={{ border: "1px", padding: 5 }}
            key={image.alternativeText}
          >
            <img
              alt={image.alternativeText}
              src={image.url}
              style={{
                width: "100%",
                height: 450,
                borderRadius: 6,
              }}
            />
            <Typography variant="subtitle2">{image.sourceText}</Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

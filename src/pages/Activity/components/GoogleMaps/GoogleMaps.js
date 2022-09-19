import React from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
    <PushPinIcon />
    {text}
  </div>
);

export default function GoogleMaps({ latitude, longitude }) {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly
    //Provide urlkey to access google maps
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAX10rFTQTPF4o4xhzYQO7V4nfuAUjNLfk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={latitude}
          lng={longitude}
          text="Current Activity"
        />
      </GoogleMapReact>
    </div>
  );
}

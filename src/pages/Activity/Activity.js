import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import { srvGetActivity } from "../../services/srvActivity";
import ActivityHeader from "./components/ActivityHeader/ActivityHeader";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Labels from "./components/Labels/Labels";
import ActivityDescription from "./components/ActivityDescription/ActivityDescription";
import GoogleMaps from "./components/GoogleMaps/GoogleMaps";
import NearByActivities from "./components/NearbyActivities/NearbyActivities";
import { useParams } from "react-router-dom";

const Activity = () => {
  const [activity, setActivity] = useState(null);
  const params = useParams();

  useEffect(() => {
    const slug = params.activity_slug;
    srvGetActivity(slug).then((res) => {
      setActivity(res.data);
    });
  }, []);

  return (
    activity && (
      <>
        <ImageCarousel images={activity.images} />
        <Container>
          <Grid container style={{ height: 1375 }}>
            <ActivityHeader id={activity.id} name={activity.name} />
            <Labels labels={activity.labels} />

            <ActivityDescription
              activity_description={activity.description_short}
            />
            <ActivityDescription
              activity_description={activity.description_long}
              markdown_txt
            />

            <GoogleMaps
              longitude={activity.longitude}
              latitude={activity.latitude}
            />
            <NearByActivities activity_id={activity.id} />
          </Grid>
        </Container>
      </>
    )
  );
};

export default Activity;

import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";
import { srvGetNearByActivities } from "../../../../services/srvActivity";

import CardSwiper from "../../../../components/Common/CardSwiper/CardSwiper";

const NearByActivities = ({ activity_id }) => {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    srvGetNearByActivities(activity_id).then((res) => setActivities(res.data));
  }, []);

  return (
    <Grid container xs={12} style={{ minHeight: 300, marginTop: 10 }}>
      <Typography variant="h4">Nearby Activities</Typography>
      {activities && <CardSwiper data={activities} />}
    </Grid>
  );
};

export default NearByActivities;

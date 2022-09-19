import { Grid, Typography } from "@mui/material";
import React from "react";
import Favorite from "../../../../components/Common/Favorite/Favorite";

const ActivityHeader = ({ id, name }) => {
  return (
    <Grid container xs={12} direction="row" alignItems={"center"} spacing={2}>
      <Grid item xs={10} md={6}>
        <Typography variant="h3">{name}</Typography>
      </Grid>
      <Grid item xs={2} md={6}>
        <Favorite activityId={id} />
      </Grid>
    </Grid>
  );
};

export default ActivityHeader;

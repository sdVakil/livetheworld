import React from "react";
import Stack from "@mui/material/Stack";
import { Chip, Grid } from "@mui/material";

const Labels = ({ labels }) => {
  return (
    <Grid container xs={8} direction={"row"} style={{ marginTop: 4 }}>
      <Stack spacing={1} direction="row" style={{ overflowX: "scroll" }}>
        {labels.map((label) => (
          <Chip key={label.name} label={label.name} variant="outlined" />
        ))}
      </Stack>
    </Grid>
  );
};

export default Labels;

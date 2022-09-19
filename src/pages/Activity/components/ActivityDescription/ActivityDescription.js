import { Grid, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";

const ActivityDescription = ({ activity_description, markdown_txt }) => {
  return (
    <Grid container style={{ margin: 10, textAlign: "justify" }}>
      {markdown_txt ? (
        <Typography variant="subtitle1" lineHeight={2}>
          <ReactMarkdown children={activity_description} />
        </Typography>
      ) : (
        <Typography variant="h6" style={{ color: "#27b5cf" }}>
          {activity_description}
        </Typography>
      )}
    </Grid>
  );
};

export default ActivityDescription;

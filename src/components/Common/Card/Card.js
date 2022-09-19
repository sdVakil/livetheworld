import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Favorite from "../Favorite/Favorite";
import { Grid } from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";
import AppButton from "../Button/Button";
import { useNavigate } from "react-router-dom";

const AppCard = ({ id, image, description, name, slug }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ height: 450, margin: 10 }}>
      <CardMedia
        component="img"
        alt={image.alternativeText}
        height="240"
        width="100%"
        image={image.url}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Grid container xs={12}>
          <Grid item xs={10}>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Favorite activityId={id} />
          </Grid>
        </Grid>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textAlign="justify"
        >
          <LinesEllipsis
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />

          <AppButton
            text="Read More"
            variant={"inherit"}
            color="blue"
            size="small"
            onClick={() => {
              navigate(`/activity/${slug}`, { replace: true });
              navigate(0);
            }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AppCard;

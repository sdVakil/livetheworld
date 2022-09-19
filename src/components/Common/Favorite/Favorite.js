import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { connect } from "react-redux";
import {
  AsyncAddFavorite,
  AsyncRemoveFavorite,
} from "../../../redux/actionCreators/activity";

const FavoriteComponent = ({
  activityId,
  trips,
  addFavorite,
  removeFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (trips && trips.length > 0) {
      const trip = trips[0].activities.find((trip) => trip.id === activityId);
      if (trip) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [trips]);

  const onAddFavoriteIconClicked = async () => {
    await addFavorite(activityId);
  };

  const onRemoveFavoriteIconClicked = async () => {
    await removeFavorite(activityId);
  };

  return isFavorite ? (
    <FavoriteIcon onClick={onRemoveFavoriteIconClicked} sx={{ color: "red" }} />
  ) : (
    <FavoriteBorderIcon onClick={onAddFavoriteIconClicked} />
  );
};

const mapStateToProps = (state) => {
  return {
    trips: state.activity.trips,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (activityId, tripId) =>
      dispatch(AsyncAddFavorite(activityId, tripId)),
    removeFavorite: (activityId, tripId) =>
      dispatch(AsyncRemoveFavorite(activityId, tripId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent);

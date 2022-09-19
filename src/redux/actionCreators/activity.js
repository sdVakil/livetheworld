import {
  srvAddFavorite,
  srvGetUserTrips,
  srvRemoveFavorite,
} from "../../services/srvActivity";
import { Activity } from "../actionTypes/activity";

export const GetUserTrips = (trips) => {
  return { type: Activity.GET_USER_TRIPS, payload: { trips } };
};

export const AsyncGetUserTrips = () => {
  return async (dispatch) => {
    try {
      const trips = await srvGetUserTrips();
      dispatch(GetUserTrips(trips.data));
    } catch (err) {}
  };
};

export const AddFavorite = (favorites) => {
  return { type: Activity.ADD_FAVORITE, payload: { favorites } };
};

export const AsyncAddFavorite = (activityId, tripId) => {
  return async (dispatch) => {
    try {
      const addFavorite = await srvAddFavorite(activityId, tripId);
      dispatch(AddFavorite(addFavorite.data));
    } catch (err) {}
  };
};

export const RemoveFavorite = (activityId) => {
  return { type: Activity.REMOVE_FAVORITE, payload: { activityId } };
};

export const AsyncRemoveFavorite = (activityId, tripId) => {
  return async (dispatch) => {
    try {
      const removeFavorite = await srvRemoveFavorite(activityId, tripId);
      dispatch(RemoveFavorite(activityId));
    } catch (err) {}
  };
};

import api from "../api/api";

export const srvGetActivity = (activity_slug) => {
  return api.get(`/frontend/activities/slug/${activity_slug}`);
};

export const srvGetNearByActivities = (activity_id) => {
  return api.get(`/frontend/activities/nearby/${activity_id}`);
};

export const srvGetUserTrips = () => {
  return api.get("/frontend/trips");
};

export const srvAddFavorite = (
  activityId,
  tripId = "",
  tripType = "favorite"
) => {
  return api.put("/frontend/trips/add_activity", {
    activityId,
    tripId,
    tripType,
  });
};

export const srvRemoveFavorite = (
  activityId,
  tripId = "",
  tripType = "favorite"
) => {
  return api.put("/frontend/trips/remove_activity", {
    activityId,
    tripId,
    tripType,
  });
};

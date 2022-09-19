import { Activity } from "../actionTypes/activity";

const initialState = {
  trips: [],
};

export const ActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Activity.GET_USER_TRIPS:
      return {
        ...state,
        trips: action.payload.trips,
      };

    case Activity.ADD_FAVORITE:
      return {
        ...state,
        trips: action.payload.favorites,
      };

    case Activity.REMOVE_FAVORITE:
      let newTrips = [...state.trips];
      let activities = newTrips[0].activities.filter(
        (trip) => trip.id !== action.payload.activityId
      );
      newTrips[0].activities = activities;
      return {
        ...state,
        trips: newTrips,
      };

    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { ActivityReducer } from "./activityReducer";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  activity: ActivityReducer,
});

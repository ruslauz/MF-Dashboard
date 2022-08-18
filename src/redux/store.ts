import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "./reducer";

export const reducers = {
  dashboard: dashboardReducer,
};

export const reducer = combineReducers(reducers);

const store = configureStore({
  reducer,
});

export default store;

import { RootState } from "./types";

export const getLayouts = (state: RootState) => state.dashboard.layout;
export const getWidgetsMap = (state: RootState) => state.dashboard.widgetsMap;
export const getWidgetStateById = (id: string) => (state: RootState) =>
  state[id];
export const getWidgetsType = (state: RootState) => state.dashboard.widgetsType;

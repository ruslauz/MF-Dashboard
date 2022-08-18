import { Layout } from "react-grid-layout";
import { WidgetInfo } from "widgets/constants/widgets";
import * as actionTypes from "./actionTypes";
import { WidgetsType } from "./types";

export const setLayout = (layout: Layout[]) => ({
  type: actionTypes.SET_LAYOUT,
  payload: layout,
});

export const addLayout = (layout: Layout[]) => ({
  type: actionTypes.ADD_LAYOUT,
  payload: layout,
});

export const removeLayout = (id: string) => ({
  type: actionTypes.REMOVE_LAYOUT,
  payload: id,
});

export const addToWidgetsMap = (payload: Record<string, WidgetInfo>) => ({
  type: actionTypes.ADD_TO_WIDGETS_MAP,
  payload: payload,
});

export const removeFromWidgetsMap = (id: string) => ({
  type: actionTypes.REMOVE_FROM_WIDGETS_MAP,
  payload: id,
});

export const setWidgetsType = (widgetsType: WidgetsType) => ({
  type: actionTypes.SET_WIDGETS_TYPE,
  payload: widgetsType,
});

export type DashBoardActions = ReturnType<
  | typeof setLayout
  | typeof addLayout
  | typeof removeLayout
  | typeof addToWidgetsMap
  | typeof removeFromWidgetsMap
  | typeof setWidgetsType
>;

export * as default from "./actionTypes";

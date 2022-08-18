import { Layout } from "react-grid-layout";
import { WidgetInfo } from "widgets/constants/widgets";
import { DashBoardActions } from "./actions";
import * as actionTypes from "./actionTypes";
import { WidgetsType } from "./types";

export type DashboardState = {
  layout: Layout[];
  widgetsMap: Record<string, WidgetInfo | undefined>;
  widgetsType: WidgetsType;
};

const initialState: DashboardState = {
  layout: [],
  widgetsMap: {},
  widgetsType: WidgetsType.Old,
};

export const dashboardReducer = (
  state = initialState,
  action: DashBoardActions
): DashboardState => {
  switch (action.type) {
    case actionTypes.SET_LAYOUT:
      return { ...state, layout: action.payload };
    case actionTypes.ADD_LAYOUT:
      return {
        ...state,
        layout: state.layout.map((layout) => {
          return layout;
        }),
      };
    case actionTypes.REMOVE_LAYOUT:
      return {
        ...state,
        layout: state.layout.filter(({ i }) => i !== action.payload),
      };
    case actionTypes.ADD_TO_WIDGETS_MAP:
      return {
        ...state,
        widgetsMap: { ...state.widgetsMap, ...action.payload },
      };
    case actionTypes.REMOVE_FROM_WIDGETS_MAP:
      return {
        ...state,
        widgetsMap: Object.entries(state.widgetsMap).reduce(
          (map, [key, value]) => {
            if (key !== action.payload) {
              map[key] = value;
            }
            return map;
          },
          {}
        ),
      };
    case actionTypes.SET_WIDGETS_TYPE:
      return {
        ...state,
        widgetsType: action.payload,
      };
    default:
      return state;
  }
};

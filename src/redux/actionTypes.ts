const prefix = "DASHBOARD_";

export const SET_LAYOUT = `${prefix}SET_LAYOUT` as const;
export const REMOVE_LAYOUT = `${prefix}REMOVE_LAYOUT` as const;
export const ADD_LAYOUT = `${prefix}ADD_LAYOUT` as const;

export const REMOVE_FROM_WIDGETS_MAP =
  `${prefix}REMOVE_FROM_WIDGETS_MAP` as const;
export const ADD_TO_WIDGETS_MAP = `${prefix}ADD_TO_WIDGETS_MAP` as const;

export const SET_WIDGETS_TYPE = `${prefix}SET_WIDGETS_TYPE` as const;

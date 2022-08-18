import store from "./store";

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState> & {
  [key: string]: Record<string, any>;
};
export type AppDispatch = typeof store.dispatch;
export enum WidgetsType {
  Old = "old",
  UIKit = "uiKit",
}

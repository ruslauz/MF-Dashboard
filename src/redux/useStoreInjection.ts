import { useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer, combineReducers } from "@reduxjs/toolkit";

import { Store } from "./types";
import { reducers } from "./store";

const createStoreInjectorHook =
  (asyncReducers: Record<string, Reducer>) =>
  (name: string, newReducer: Reducer) => {
    const store: Store = useStore();

    useEffect(() => {
      asyncReducers[name] = newReducer;
      store.replaceReducer(combineReducers({ ...reducers, ...asyncReducers }));
      return () => {
        delete asyncReducers[name];
        store.replaceReducer(
          combineReducers({ ...reducers, ...asyncReducers })
        );
      };
    }, []);
  };

export default createStoreInjectorHook({});

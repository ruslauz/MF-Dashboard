import React from "react";
import { Provider } from "react-redux";
import { Flex } from "@semcore/flex-box";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { store } from "./redux";

import styles from "./App.module.scss";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <Flex className={styles.page}>
        <Header />
        <Flex className={styles.page}>
          <Dashboard />
        </Flex>
      </Flex>
    </Provider>
  );
};

export default App;

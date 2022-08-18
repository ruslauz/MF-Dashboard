import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@semcore/flex-box";
import Switch from "@semcore/switch";
import { getWidgetsType } from "../../redux/selectors";
import { setWidgetsType } from "../../redux/actions";
import { WidgetsType } from "../../redux";

import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const widgetsType = useSelector(getWidgetsType);
  const isSwitchChecked = widgetsType === WidgetsType.UIKit;

  return (
    <Box tag={"header"} className={styles.header}>
      <Switch size="xl" theme="info">
        <Switch.Addon>Old Widgets</Switch.Addon>
        <Switch.Value
          checked={isSwitchChecked}
          onChange={(isChecked) =>
            dispatch(
              setWidgetsType(isChecked ? WidgetsType.UIKit : WidgetsType.Old)
            )
          }
        />
        <Switch.Addon>UI Kit Widgets</Switch.Addon>
      </Switch>
    </Box>
  );
};

export default Header;

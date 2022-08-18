import React, { memo, useMemo, useRef, useState } from "react";
import Button from "@semcore/button";
import { WidgetType } from "widgets/constants/widgets";
import { useDispatch, useSelector } from "react-redux";

import FederatedComponent from "../FederatedComponent";
import Skeleton from "../Skeleton";
import { setLayout } from "../../redux/actions";
import { getLayouts, getWidgetsMap } from "../../redux/selectors";

import styles from "./FederatedWidget.module.scss";

interface Props {
  id: string;
  widgetName: string;
  widgetType: WidgetType;
}

const FederatedWidget = ({ id, widgetName, widgetType }: Props) => {
  const widgetRef = useRef<any>(null);
  const dispatch = useDispatch();
  const layout = useSelector(getLayouts);
  const widgetsMap = useSelector(getWidgetsMap);
  const [isShowingMore, setShowingMore] = useState(false);
  const fallback = useMemo(
    () => <Skeleton widgetType={widgetType} />,
    [widgetType]
  );

  return (
    <>
      <FederatedComponent
        remote="widgets"
        url="http://localhost:3002/remoteEntry.js"
        module={`./${widgetName}`}
        fallback={fallback}
        id={id}
        ref={widgetRef}
      />
      {widgetType === WidgetType.Table && (
        <Button
          className={styles.showMore}
          onClick={() => {
            if (
              widgetRef.current === null ||
              !(widgetRef.current instanceof HTMLElement)
            ) {
              return;
            }
            dispatch(
              setLayout(
                layout.map((item) => {
                  if (item.i === id) {
                    return {
                      ...item,
                      h: isShowingMore
                        ? widgetsMap[id]?.h || 1
                        : Math.ceil((widgetRef.current.clientHeight + 10) / 42),
                    };
                  }
                  return item;
                })
              )
            );
            setShowingMore((prev) => !prev);
          }}
        >
          <Button.Text>{isShowingMore ? "Show less" : "Show more"}</Button.Text>
        </Button>
      )}
    </>
  );
};

export default memo(FederatedWidget);

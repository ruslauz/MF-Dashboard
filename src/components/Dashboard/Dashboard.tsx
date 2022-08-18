import React, { DragEvent, FC, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { Box } from "@semcore/flex-box";
import { Layout } from "react-grid-layout";
import widgets, { WidgetInfo, WidgetType } from "widgets/constants/widgets";

import { WidgetsType } from "../../redux";
import {
  getLayouts,
  getWidgetsMap,
  getWidgetsType,
} from "../../redux/selectors";
import { addToWidgetsMap, setLayout } from "../../redux/actions";
import WidgetsList from "../WidgetsList/WidgetsList";
import WidgetsGrid from "../WidgetsGrid";

import styles from "./Dashboard.module.scss";

const widgetsInfo = Object.values(widgets);

const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const [draggingWidget, setDraggingWidget] = useState<WidgetInfo | null>(null);
  const [isWidgetDragging, setWidgetDragging] = useState<boolean>(false);
  const [isOver, setIsOver] = useState<boolean>(false);
  const layout = useSelector(getLayouts);
  const widgetsMap = useSelector(getWidgetsMap);
  const widgetsType = useSelector(getWidgetsType);
  const widgetsList = useMemo(() => {
    return widgetsInfo.filter((widgetInfo) =>
      widgetsType === WidgetsType.Old
        ? widgetInfo.type === WidgetType.Old
        : widgetInfo.type !== WidgetType.Old
    );
  }, [widgetsType]);

  const handleDragStart = (event: DragEvent, widgetInfo: WidgetInfo) => {
    event.dataTransfer.setData("text/plain", "");
    setDraggingWidget(widgetInfo);
  };

  const handleDragEnd = () => {
    setWidgetDragging(false);
    setIsOver(false);
  };

  const handleMouseDown = () => {
    setWidgetDragging(true);
  };

  const handleMouseUp = () => {
    setWidgetDragging(false);
  };

  const handleDropDragOver = () => {
    if (!draggingWidget) {
      return false;
    }
    const { w, h } = draggingWidget;
    setIsOver(true);
    return { w, h };
  };

  const handleDrop = (layout: Layout[]) => {
    if (draggingWidget === null) {
      return;
    }

    const id = v4();
    const newLayout = layout.map((item) => {
      if (item.i === "__dropping-elem__") {
        item.i = id;
      }
      return item;
    });

    dispatch(setLayout(newLayout));
    dispatch(addToWidgetsMap({ [id]: draggingWidget }));
    setDraggingWidget(null);
  };

  const handleResize: ReactGridLayout.ItemCallback = () => {
    console.log("resizing");
  };

  const handleResizeStop: ReactGridLayout.ItemCallback = (layout) => {
    dispatch(setLayout(layout));
  };

  const handleLayoutChange = (layout: Layout[]) => {
    if (isWidgetDragging) {
      return;
    }

    dispatch(setLayout(layout));
  };

  return (
    <Box className={styles.main}>
      <WidgetsList
        isWidgetDragging={isWidgetDragging}
        widgetsInfo={widgetsList}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />

      <WidgetsGrid
        layout={layout}
        isOver={isOver}
        widgetsMap={widgetsMap}
        onDropDragOver={handleDropDragOver}
        onDrop={handleDrop}
        onResizeStop={handleResizeStop}
        onResize={handleResize}
        onLayoutChange={handleLayoutChange}
      />
    </Box>
  );
};

export default Dashboard;

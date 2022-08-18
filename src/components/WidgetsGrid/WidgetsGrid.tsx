import React, { FC, useState } from "react";
import cn from "classnames";
import { Flex } from "@semcore/flex-box";
import RGL, { WidthProvider } from "react-grid-layout";
import { WidgetInfo, WidgetType } from "widgets/constants/widgets";
import FederatedStringifiedWidget from "../FederatedStringifiedWidget";
import FederatedWidget from "../FederatedWidget";

import styles from "./WidgetsGrid.module.scss";

const GridLayout = WidthProvider(RGL);

type Props = {
  layout: RGL.Layout[];
  isOver: boolean;
  widgetsMap: Record<string, WidgetInfo | undefined>;
  onDropDragOver: RGL.ReactGridLayoutProps["onDropDragOver"];
  onDrop: RGL.ReactGridLayoutProps["onDrop"];
  onResizeStop: RGL.ReactGridLayoutProps["onResizeStop"];
  onResize: RGL.ReactGridLayoutProps["onResize"];
  onLayoutChange: RGL.ReactGridLayoutProps["onLayoutChange"];
};

const WidgetsGrid: FC<Props> = ({
  layout,
  isOver,
  widgetsMap,
  onDropDragOver,
  onDrop,
  onResizeStop,
  onResize,
  onLayoutChange,
}) => {
  const [isGridItemDragging, setGridItemDragging] = useState<boolean>(false);

  return (
    <Flex className={styles.grid}>
      <GridLayout
        autoSize
        isBounded
        isDroppable
        useCSSTransforms
        verticalCompact
        rowHeight={32}
        cols={12}
        className={cn(styles.gridLayout, {
          [styles.gridLayoutDragOver]: isOver,
        })}
        layout={layout}
        onDropDragOver={onDropDragOver}
        onDrop={onDrop}
        onResizeStop={(...args) => {
          onResizeStop?.(...args);
          setGridItemDragging(false);
        }}
        onResize={onResize}
        onLayoutChange={onLayoutChange}
      >
        {layout.map((item) => {
          const { i } = item;
          const widget = widgetsMap[i];

          if (widget === undefined) {
            return null;
          }

          const { moduleName, type, isStringified } = widget;

          return (
            <div
              key={i}
              className={cn(styles.gridItem, {
                [styles.gridItemDragging]: isGridItemDragging,
              })}
              onMouseDownCapture={() => {
                setGridItemDragging(true);
              }}
              onMouseUpCapture={() => {
                setGridItemDragging(false);
              }}
              onDragEndCapture={() => setGridItemDragging(false)}
            >
              {isStringified || type === WidgetType.Old ? (
                <FederatedStringifiedWidget id={i} widgetName={moduleName} />
              ) : (
                <FederatedWidget
                  id={i}
                  widgetType={type}
                  widgetName={moduleName}
                />
              )}
            </div>
          );
        })}
      </GridLayout>
    </Flex>
  );
};

export default WidgetsGrid;

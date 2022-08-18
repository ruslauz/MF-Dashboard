import React, { DragEvent, FC } from "react";
import { Flex } from "@semcore/flex-box";
import Card from "@semcore/card";
import { Text } from "@semcore/typography";
import Tooltip from "@semcore/tooltip";
import cn from "classnames";
import { WidgetInfo } from "widgets/constants/widgets";

import styles from "./WidgetsList.module.scss";

type Props = {
  widgetsInfo: WidgetInfo[];
  isWidgetDragging: boolean;
  onDragStart: (event: DragEvent, widgetInfo: WidgetInfo) => void;
  onDragEnd: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
};

const WidgetsList: FC<Props> = ({
  widgetsInfo,
  isWidgetDragging,
  onDragStart,
  onDragEnd,
  onMouseDown,
  onMouseUp,
}) => {
  return (
    <Flex className={styles.widgets}>
      {widgetsInfo.map((widgetInfo) => {
        const { moduleName, widgetName } = widgetInfo;

        return (
          <Tooltip
            placement="right"
            theme="warning"
            interaction="hover"
            title={widgetName}
            className={cn(styles.widget)}
          >
            <Card
              draggable
              key={moduleName}
              className={cn(styles.widget, {
                [styles.widgetDragging]: isWidgetDragging,
              })}
              unselectable="on"
              onDragStart={(event: DragEvent) => onDragStart(event, widgetInfo)}
              onDragEnd={onDragEnd}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            >
              <Card.Body className={styles.widgetBody}>
                <Text noWrap>{widgetName}</Text>
              </Card.Body>
            </Card>
          </Tooltip>
        );
      })}
    </Flex>
  );
};

export default WidgetsList;

import React from "react";
import {
  AreaChartSkeleton,
  BarChartSkeleton,
  HistogramChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  VennChartSkeleton,
  BubbleChartSkeleton,
  ScatterPlotChartSkeleton,
} from "@semcore/ui/skeleton";
import { WidgetType } from "widgets/constants/widgets";

type Props = {
  widgetType: WidgetType;
  type?: "linear" | "monotone";
  layout?: "horizontal" | "vertical";
};

const Skeleton = ({ widgetType, ...skeletonProps }: Props) => {
  switch (widgetType) {
    case WidgetType.AreaChart:
      return <AreaChartSkeleton {...skeletonProps} />;
    case WidgetType.BarChart:
      return <BarChartSkeleton {...skeletonProps} />;
    case WidgetType.PieChart:
      return <PieChartSkeleton {...skeletonProps} />;
    case WidgetType.HistogramChart:
      return <HistogramChartSkeleton {...skeletonProps} />;
    case WidgetType.LineChart:
      return <LineChartSkeleton {...skeletonProps} />;
    case WidgetType.VennChart:
      return <VennChartSkeleton {...skeletonProps} />;
    case WidgetType.BubbleChart:
      return <BubbleChartSkeleton {...skeletonProps} />;
    default:
      //Todo Create a default skeleton
      return null;
  }
};

export default Skeleton;

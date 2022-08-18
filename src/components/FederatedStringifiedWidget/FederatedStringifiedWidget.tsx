import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Provider } from "react-redux";
import { WidgetType } from "widgets/constants/widgets";
import FederatedModule from "../FederatedComponent";
import { loadComponent } from "../../utils/loadComponent";
import { store } from "../../redux";
import ReactDOM from "react-dom";
import FederatedWidget from "../FederatedWidget";

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "children"
  > {
  id: string;
  widgetName: string;
}

export enum LoadingStatus {
  Uncalled = "Uncalled",
  Pending = "Pending",
  Succeeded = "Succeeded",
  Failed = "Failed",
}

const FederatedStringifiedWidget = ({ id, widgetName, ...divProps }: Props) => {
  const [stringifiedWidget, setStringifiedWidget] = useState("");
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(
    LoadingStatus.Uncalled
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoadingStatus(LoadingStatus.Pending);
    loadComponent<string>(
      "widgets",
      "default",
      `./${widgetName}`,
      "http://localhost:3002/remoteEntry.js"
    )()
      .then((component) => {
        setStringifiedWidget(component.default);
        setLoadingStatus(LoadingStatus.Succeeded);
        const newContent = document
          .createRange()
          .createContextualFragment(component.default);
        if (containerRef.current instanceof HTMLElement) {
          containerRef.current.innerHTML = "";
          containerRef.current.append(newContent);
        }
      })
      .catch((error) => console.log(error));
    setLoadingStatus(LoadingStatus.Failed);
  }, []);

  // useEffect(() => {
  //   if (
  //     loadingStatus === LoadingStatus.Succeeded &&
  //     containerRef.current !== undefined
  //   ) {
  //     ReactDOM.hydrate(
  //       <Provider store={store}>
  //         <FederatedWidget
  //           id={id}
  //           widgetType={WidgetType.AreaChart}
  //           widgetName="AreaChart"
  //         />
  //       </Provider>,
  //       containerRef.current
  //     );
  //   }
  // }, [loadingStatus]);

  return (
    <div
      {...divProps}
      ref={containerRef}
      // dangerouslySetInnerHTML={{ __html: stringifiedWidget }}
    />
  );
};

export default memo(FederatedStringifiedWidget);

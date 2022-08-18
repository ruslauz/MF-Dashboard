import React, {
  ComponentType,
  ForwardedRef,
  forwardRef,
  lazy,
  memo,
  ReactNode,
} from "react";

import { loadComponent } from "../../utils/loadComponent";

interface Props {
  remote: string;
  url: string;
  module: string;
  fallback?: NonNullable<ReactNode> | null;
  innerRef: ForwardedRef<unknown>;
  [key: string]: any;
}

const FederatedComponent = (props: Props) => {
  const {
    remote,
    url,
    module,
    fallback = null,
    innerRef,
    ...componentProps
  } = props;

  if (!remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Component = lazy(
    loadComponent<ComponentType<any>>(remote, "default", module, url)
  );

  return (
    <React.Suspense fallback={fallback}>
      <Component {...componentProps} ref={innerRef} />
    </React.Suspense>
  );
};

export default memo(
  forwardRef((props: Props, ref: ForwardedRef<unknown>) => (
    <FederatedComponent {...props} innerRef={ref} />
  ))
);

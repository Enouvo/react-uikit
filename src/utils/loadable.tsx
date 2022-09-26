import React, { lazy, Suspense } from "react";
import { Loading } from "../components/Loading";

export const loadable = (
  /* eslint-disable @typescript-eslint/no-explicit-any */
  importFunc: Promise<{ default: any }>,
  { fallback } = { fallback: <Loading /> }
) => {
  const LazyComponent = lazy(() => importFunc);
  return function (props: any) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

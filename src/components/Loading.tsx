import { Spin } from "antd";
import React from "react";

export function Loading() {
  return (
    <div className="h-screen flex center2">
      <Spin />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

interface MenuDataItem {
  path?: string;
}

export function MenuSidebarItem({ path }: MenuDataItem, dom: React.ReactNode) {
  return <Link to={path ?? "/"}>{dom}</Link>;
}

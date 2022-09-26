import React from "react";
import { Link } from "react-router-dom";

export function MenuHeader(logo: React.ReactNode, title: React.ReactNode) {
  return (
    <Link to="/">
      {logo}
      {title}
    </Link>
  );
}

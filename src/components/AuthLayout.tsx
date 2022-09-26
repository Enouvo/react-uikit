import { Col, Grid, Row } from "antd";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  imgSrc?: string;
}

export function AuthLayout({ children, imgSrc }: Props) {
  const { md } = Grid.useBreakpoint();
  return (
    <Row className="h-screen">
      {md && (
        <Col md={16} sm={0} xs={0} className="center2 flex bg-surface">
          {imgSrc && <img src={imgSrc} alt="background" />}
        </Col>
      )}
      <Col md={8} sm={24} xs={24} className="p-10 mt-24 leading-normal">
        {children}
      </Col>
    </Row>
  );
}

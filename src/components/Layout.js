import React from "react";
import { Container } from "react-bootstrap";

export const Layout = (props) => {
  return <Container className="mt-4">{props.children}</Container>;
};

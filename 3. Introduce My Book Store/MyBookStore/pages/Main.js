import React from "react";

import {
  Container,
  Delete,
  Notification,
  Column,
  Button,
  Hero,
  Title
} from "rbx";
import "rbx/index.css";

export default function Main() {
  return (
    <Hero color={"info"} size="fullheight" gradient>
      <Hero.Body>
        <Container>
          <Title>{"info"} Main</Title>
          <Title as="h2" subtitle>
            {"info"} Main
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

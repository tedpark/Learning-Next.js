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

export default function SignUp() {
  return (
    <Hero color={"info"} size="fullheight" gradient>
      <Hero.Body>
        <Container>
          <Title>{"info"} SignUp</Title>
          <Title as="h2" subtitle>
            {"info"} SignUp
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

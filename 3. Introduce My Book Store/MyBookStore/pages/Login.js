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

export default function Login() {
  return (
    <Hero color={"primary"} size="fullheight" gradient>
      <Hero.Body>
        <Container>
          <Title>{"info"} Login</Title>
          <Title as="h2" subtitle>
            {"info"} Login
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

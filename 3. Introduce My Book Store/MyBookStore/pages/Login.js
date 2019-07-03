import React from "react";

import {
  Container,
  Delete,
  Notification,
  Column,
  Button,
  Hero,
  Title,
  Field,
  Control,
  Input,
  Icon,
  Section,
  Box
} from "rbx";
import "rbx/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faGamepad,
  faEnvelope,
  faCheck,
  faLock
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <Hero>
      <Hero.Body>
        <Container>
          <Field>
            <Control iconLeft iconRight>
              <Input type="email" placeholder="Email" />
              <Icon size="small" align="left">
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
              <Icon size="small" align="right">
                <FontAwesomeIcon icon={faCheck} />
              </Icon>
            </Control>
          </Field>
          <Field>
            <Control iconLeft>
              <Input type="password" placeholder="Password" />
              <Icon size="small" align="left">
                <FontAwesomeIcon icon={faLock} />
              </Icon>
            </Control>
          </Field>
          <Field>
            <Control>
              <Button color="success">Login</Button>
            </Control>
          </Field>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

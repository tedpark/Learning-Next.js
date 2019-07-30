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
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faGamepad,
  faEnvelope,
  faCheck,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  LinkedInLoginButton
} from "react-social-login-buttons";

export default function Login() {
  return (
    <Hero color={"info"} size="fullheight" gradient>
      <Hero.Body>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 300
          }}
        >
          <Box>
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
                <Button color="info" onClick={() => Router.push("/main")}>
                  <strong>Login</strong>
                </Button>
              </Control>
            </Field>
            <Field>
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </Field>
            <Field>
              <GoogleLoginButton onClick={() => alert("Hello")} />
            </Field>
            <Field>
              <TwitterLoginButton onClick={() => alert("Hello")} />
            </Field>
            <Field>
              <LinkedInLoginButton onClick={() => alert("Hello")} />
            </Field>
          </Box>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

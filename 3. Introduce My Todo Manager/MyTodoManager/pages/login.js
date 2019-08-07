import React from "react";
import Link from "next/link";
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
              <FacebookLoginButton
                onClick={() =>
                  Router.push({
                    pathname: "/users/auth/facebook/callback"
                    // query: { name: "Someone" }
                  })
                }
              />
            </Field>
            <Field>
              <GoogleLoginButton
                onClick={() =>
                  Router.push({
                    pathname: "/users/auth/google/callback"
                    // query: { name: "Someone" }
                  })
                }
              />
            </Field>
            <Field>
              <TwitterLoginButton
                onClick={() =>
                  Router.push({
                    pathname: "/users/auth/twitter/callback"
                    // query: { name: "Someone" }
                  })
                }
              />
            </Field>
            <Field>
              <LinkedInLoginButton
                onClick={() =>
                  Router.push({
                    pathname: "/users/auth/linkedin/callback"
                    // query: { name: "Someone" }
                  })
                }
              />
            </Field>
          </Box>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

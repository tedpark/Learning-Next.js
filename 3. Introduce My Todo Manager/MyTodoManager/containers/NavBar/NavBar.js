import React from "react";
import Router from "next/router";
import { Container, Navbar, Button } from "rbx";
import "rbx/index.css";

const NavBar = (props, { children }) => {
  // export default function NavBar(   props, { children }  ) {
  const { Component, pageProps, reduxStore } = props;
  return (
    <Navbar transparent fixed="top" style={{ backgroundColor: "#155B9C" }}>
      <Navbar.Brand>
        <Navbar.Item href="/">
          <img
            src="https://bulma.io/images/bulma-logo-white.png"
            alt=""
            role="presentation"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="end">
          <Navbar.Item style={{ backgroundColor: "#155B9C" }}>
            <Button.Group>
              <Button color="info" onClick={() => Router.push("/login")}>
                <strong>Login</strong>
              </Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavBar;

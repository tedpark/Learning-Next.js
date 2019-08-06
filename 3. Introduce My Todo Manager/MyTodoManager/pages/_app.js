import React from "react";
import App, { Container } from "next/app";
import NavBar from "../pages/NavBar/NavBar";

function Index(props) {
  const { Component, pageProps, reduxStore } = props;
  return (
    <Container>
      <NavBar />
      <Component {...pageProps} />
    </Container>
  );
}

export default Index;

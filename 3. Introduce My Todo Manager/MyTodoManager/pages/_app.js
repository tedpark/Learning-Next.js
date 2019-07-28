import React from "react";
import App, { Container } from "next/app";
import NavBar from "../containers/NavBar/NavBar";

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

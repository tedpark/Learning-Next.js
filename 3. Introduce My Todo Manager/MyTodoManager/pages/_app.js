import React from "react";
import App, { Container } from "next/app";
import NavBar from "../pages/NavBar/NavBar";

function Index(props) {
  const { Component, pageProps, reduxStore } = props;
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default Index;

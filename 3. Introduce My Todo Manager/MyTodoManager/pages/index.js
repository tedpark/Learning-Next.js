import React from "react";

import {
  Container,
  Delete,
  Notification,
  Column,
  Button,
  Footer,
  Content,
  Hero,
  Title,
  Navbar,
  Image,
  Box
} from "rbx";
import "rbx/index.css";

export default function Index() {
  return (
    <Hero
      gradient
      style={{ backgroundColor: "#155B9C" }}
      size="fullheight"
      gradient
    >
      <Hero.Body>
        <Container style={{ marginLeft: "0px", backgroundColor: "#155B9C" }}>
          <Title style={{ color: "white" }}>
            Welcome to our Todo Manager Page
          </Title>
          <Title as="h2" subtitle style={{ color: "white" }}>
            Font Awesome has grown to have over 5,000 icons and continues to add
            the most popular and needed icons. Stop hunting down missing icons
            you need, combining from multiple sets, or finding that company's
            official logo in a dirty corner of the internet.
          </Title>
        </Container>
      </Hero.Body>
    </Hero>

    // {/* <Column.Group>
    //   <Column narrow>
    //     <Box style={{ width: "200px" }}>
    //       <Title as="p" size={5}>
    //         Narrow column
    //       </Title>
    //       <Title as="p" subtitle>
    //         This column is only 200px wide.
    //       </Title>
    //     </Box>
    //   </Column>
    //   <Column>
    //     <Box>
    //       <Image.Container size={128}>
    //         <Image
    //           rounded
    //           src="https://bulma.io/images/placeholders/128x128.png"
    //         />
    //       </Image.Container>
    //       <Title as="p" size={5}>
    //         Flexible column
    //       </Title>
    //       <Title as="p" subtitle>
    //         This column will taakae up the remaining space available.
    //       </Title>
    //     </Box>
    //   </Column>
    // </Column.Group> */}
    // {/*
    // <Footer backgroundColor="dark">
    //   <Content textAlign="centered">
    //     <p>
    //       <strong>rbx</strong> by{" "}
    //       <a href="https://github.com/dfee">Devin Fee</a>. The source code is
    //       released under the{" "}
    //       <a href="https://opensource.org/licenses/mit-license.php">
    //         MIT License
    //       </a>
    //       . The website content is licensed{" "}
    //       <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
    //         CC BY NC SA 4.0
    //       </a>
    //       .
    //     </p>
    //   </Content>
    // </Footer> */}
  );
}

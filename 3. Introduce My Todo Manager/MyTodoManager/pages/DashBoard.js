import React from "react";

import { Container, Delete, Notification, Column, Button } from "rbx";
import "rbx/index.css";

export default function Index() {
  return (
    <Container>
      <Button.Group hasAddons>
        <Button color="success" selected>
          Yesss
        </Button>
        <Button>Maybe</Button>
        <Button>No</Button>
      </Button.Group>
      <Button.Group hasAddons>
        <Button>Yes</Button>
        <Button color="info" selected>
          Maybess
        </Button>
        <Button>No</Button>
      </Button.Group>
      <Button.Group hasAddons>
        <Button>Yes</Button>
        <Button>Maybe</Button>
        <Button color="danger">No</Button>
      </Button.Group>
    </Container>
  );
}

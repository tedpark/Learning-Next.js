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
  Label,
  Control,
  Input,
  Icon,
  Help,
  Select,
  Textarea,
  Checkbox,
  Radio
} from "rbx";
import "rbx/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUser,
  faGamepad,
  faEnvelope,
  faCheck,
  faLock,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  return (
    <Hero color={"info"} size="fullheight" gradient>
      <Hero.Body>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <form>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input type="text" placeholder="Text input" />
              </Control>
            </Field>
            <Field>
              <Label>Username</Label>
              <Control iconLeft iconRight>
                <Input
                  color="success"
                  defaultValue="rbx"
                  placeholder="Text input"
                  type="text"
                />
                <Icon size="small" align="left">
                  <FontAwesomeIcon icon={faUser} />
                </Icon>
                <Icon size="small" align="right">
                  <FontAwesomeIcon icon={faCheck} />
                </Icon>
              </Control>
              <Help color="success">This username is available</Help>
            </Field>

            <Field>
              <Label>Email</Label>
              <Control iconLeft iconRight>
                <Input
                  color="danger"
                  defaultValue="hello@"
                  placeholder="Email input"
                  type="email"
                />
                <Icon size="small" align="left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
                <Icon size="small" align="right">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </Icon>
              </Control>
              <Help color="danger">This email is invalid</Help>
            </Field>

            <Field>
              <Label>Subject</Label>
              <Control>
                <Select.Container fullwidth>
                  <Select>
                    <Select.Option value="dropdown">
                      Select dropdown
                    </Select.Option>
                    <Select.Option value="options">With Options</Select.Option>
                  </Select>
                </Select.Container>
              </Control>
            </Field>

            <Field>
              <Label>Message</Label>
              <Control>
                <Textarea placeholder="Textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Label>
                  <Checkbox /> I agree to the{" "}
                  <a href="#terms">terms and conditions</a>
                </Label>
              </Control>
            </Field>

            <Field>
              <Control>
                {["Yes", "No"].map(value => (
                  <Label key={value}>
                    <Radio name="question" value={value} /> {value}
                  </Label>
                ))}
              </Control>
            </Field>

            <Field kind="group">
              <Control>
                <Button color="link">Submit</Button>
              </Control>
              <Control>
                <Button text>Cancel</Button>
              </Control>
            </Field>
          </form>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

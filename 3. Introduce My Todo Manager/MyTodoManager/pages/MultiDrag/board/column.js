// @flow
import React, { Component } from "react";
import styled from "@emotion/styled";
import { colors } from "@atlaskit/theme";
import { grid, borderRadius } from "../constants";
import { Draggable } from "react-beautiful-dnd";
import ReactModal from "react-modal";

// import type { DraggableProvided, DraggableStateSnapshot } from '../../../src';
import QuoteList from "../primatives/quote-list";
import Title from "../primatives/title";
// import type { Quote } from '../types';

import { Button, Textarea, Control } from "rbx";
import "rbx/index.css";

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) =>
    isDragging ? colors.G50 : colors.N30};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.G50};
  }
`;
ReactModal.setAppElement("#__next");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(52, 52, 52, 0.8)"
  },
  // modal: {
  //   top: "50%",
  //   left: "50%",
  //   right: "auto",
  //   bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-50%, -50%)"
  // },
  content: {
    top: "50%",
    height: "200px",
    left: "50%",
    border: "0px",
    color: "white",
    backgroundColor: "#155B9C",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class Column extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    const index = this.props.index;
    return (
      <>
        <Draggable draggableId={title} index={index}>
          {(provided, snapshot) => (
            <Container ref={provided.innerRef} {...provided.draggableProps}>
              <Header isDragging={snapshot.isDragging}>
                <Title
                  isDragging={snapshot.isDragging}
                  {...provided.dragHandleProps}
                >
                  {title}
                </Title>
                <Button
                  style={{ margin: 10 }}
                  color="info"
                  // onClick={() => console.log(title)}
                  onClick={() => this.handleOpenModal()}
                >
                  <strong>Add</strong>
                </Button>
              </Header>
              <QuoteList
                listId={title}
                listType="QUOTE"
                style={{
                  backgroundColor: snapshot.isDragging ? colors.G50 : null
                }}
                quotes={quotes}
                internalScroll={this.props.isScrollable}
                isCombineEnabled={Boolean(this.props.isCombineEnabled)}
              />
            </Container>
          )}
        </Draggable>
        <ReactModal
          // style={{ width: 20 }}
          style={customStyles}
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={() => this.handleCloseModal()}
        >
          {/* <p>Modal text!</p> */}
          <Control>
            <div
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <Textarea placeholder="Todo..." fixedSize />
              <Button
                style={{ marginTop: 10, position: "absolute", right: 0 }}
                color="info"
                onClick={() => this.handleCloseModal()}
              >
                <strong>Save</strong>
              </Button>
            </div>
          </Control>
        </ReactModal>
      </>
    );
  }
}

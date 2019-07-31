// @flow
import React, { Component } from "react";
import styled from "@emotion/styled";
import { colors } from "@atlaskit/theme";
import { grid, borderRadius } from "../constants";
import { Draggable } from "react-beautiful-dnd";

// import type { DraggableProvided, DraggableStateSnapshot } from '../../../src';
import QuoteList from "../primatives/quote-list";
import Title from "../primatives/title";
// import type { Quote } from '../types';

import { Button, Modal } from "rbx";
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

export default class Column extends Component {
  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    const index = this.props.index;
    return (
      // http://reactcommunity.org/react-modal/examples/minimal.html
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
                onClick={() => console.log(title)}
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
    );
  }
}

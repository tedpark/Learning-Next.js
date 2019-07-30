import React, { useState } from "react";

import {
  Container,
  Delete,
  Notification,
  Column,
  Button,
  Hero,
  Title
} from "rbx";
import "rbx/index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Board from './src/board/board';
// import { authorQuoteMap, generateQuoteMap } from './src/data';
// import Board from "../pages/MultiDrag/board";
import Board from "../pages/MultiDrag/board/board";
import { authorQuoteMap, generateQuoteMap } from "../pages/MultiDrag/data";

const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500)
};

export default function Main() {
  return <Board initial={authorQuoteMap} />;
}

import React, { useState, useEffect } from "react";
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
import json from "../pages/MultiDrag/JsonData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "../pages/MultiDrag/board/board";
import { authorQuoteMap, generateQuoteMap } from "../pages/MultiDrag/data";
import axios from "axios";

async function getKanbanData() {
  try {
    const response = await axios.get("http://localhost:3000" + "/todos");
    console.log(response);
    // this.setState({
    //   view: <MainLayoutView />
    // });
    //TODO if login Success go MainLayoutView
  } catch (error) {
    console.error(error);
  }
}

const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500)
};

export default function Main() {
  useEffect(() => {
    getKanbanData();
  });

  return <Board initial={json} />;
}

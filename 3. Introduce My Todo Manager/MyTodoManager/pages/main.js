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
import json from "../JsonData";
import Board from "../containers/Kanban/board/board";
import { authorQuoteMap, generateQuoteMap } from "../data";
import axios from "axios";

async function getKanbanData() {
  try {
    const response = await axios.get("http://localhost:9000" + "/todos");
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

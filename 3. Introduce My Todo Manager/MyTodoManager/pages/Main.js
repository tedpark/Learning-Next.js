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
//react-beautiful-dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Board from './src/board/board';
// import { authorQuoteMap, generateQuoteMap } from './src/data';
import Board from "../pages/MultiDrag/board";
import { authorQuoteMap, generateQuoteMap } from "../pages/MultiDrag/data";

const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500)
};

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  console.log(list);
  const result = Array.from(list);
  console.log(result);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log(result);
  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 300
});

export default function Main() {
  // const [items, setitems] = useState(10);
  // const [state, setState] = useState({ quotes: getItems(10) });

  const [items, setItems] = useState(getItems(10));
  const [selected, setSelected] = useState(getItems(5, 10));
  const [selected3, setSelected3] = useState(getItems(10, 10));

  // const [state, setState] = useState({ items: getItems(10) });
  // const [state, setState] = useState({ selected: getItems(5, 10) });

  console.log(items);
  const id2List = {
    droppable: items,
    droppable2: selected,
    droppable3: selected3
  };

  function getList(id) {
    return id2List[id];
  }

  // function onDragEnd(result) {
  //   // dropped outside the list
  //   if (!result.destination) {
  //     return;
  //   }

  //   const quotes = reorder(
  //     state.quotes,
  //     result.source.index,
  //     result.destination.index
  //   );

  //   setState({ quotes });

  //   console.log(state);
  // }

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === "droppable") {
        // state = { selected: items };
        setItems(items);
      } else if (source.droppableId === "droppable2") {
        // state = { selected: items };
        setSelected(items);
      } else if (source.droppableId === "droppable3") {
        // state = { selected: items };
        setSelected3(items);
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setItems(result.droppable);
      setSelected(result.droppable2);
      setSelected3(result.droppable3);
    }
  }

  return <Board initial={authorQuoteMap} />;
}

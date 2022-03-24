import React, { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([
    {
      titel: "Sparkler 1 geeft minder output",
      info: "Checken of er voldoende materiaal in zit. En anders bijvullen. Even een pasje zoeken.",
    },
    {
      titel: "Cyr-wheel-vloer dweilen",
      info: "De vloer is heel vies!",
    },
    {
      titel: "Planken draaischijf zijn krom",
      info: "De planken beginnen steeds krommer te worden en zijn beschadigd. Speler heeft spliters opgelopen. Prio!",
    },
  ]);

  return (
    <>
      <h2>ToDoList</h2>
      {toDoItems.map(function (item, i) {
        return <ToDo titel={item.titel} info={item.info} />;
      })}
    </>
  );
};

export default ToDoList;

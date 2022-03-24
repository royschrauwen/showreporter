import React from "react";
import ToDoList from "../Components/ToDoList";

const ToDoListPage = () => {
  return (
    <>
      <h3>Hier staan alle ToDo's</h3>
      <button>PLUS</button>
      <ToDoList />
    </>
  );
};

export default ToDoListPage;

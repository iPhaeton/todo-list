/**
*
* Todos
*
*/

import React from 'react';

import TodoInput from "../../containers/TodoInput";
import TodoList from "../../containers/TodoList";

function Todos() {
  return (
    <div className="container">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default Todos;

/**
*
* TodoItem
*
*/

import React from 'react';

import ItemPanel from "./ItemPanel";

function TodoItem(props) {
  return (
    <ItemPanel className="panel panel-default">
      <label className="checkbox-inline">
        <input type="checkbox" onClick={() => props.onDone(props.index)}/>
        {props.index + 1}. {props.item.name}
      </label>
    </ItemPanel>
  );
}

export default TodoItem;

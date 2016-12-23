/**
*
* TodoItem
*
*/

import React from 'react';

import ItemPanel from "./ItemPanel";
import RemoveButton from "./RemoveButton";
import ItemCheckbox from "./ItemCheckbox";

function TodoItem(props) {
  return (
    <ItemPanel done={props.item.done} className="panel panel-default">
      <label className="checkbox-inline">
        <ItemCheckbox checked={props.item.done} type="checkbox" onClick={() => props.onDone(props.index)}/>
        {props.index + 1}. {props.item.name}
      </label>
      <RemoveButton onClick={() => props.onRemove(props.index)}>
        <span className="glyphicon glyphicon-remove"></span>
      </RemoveButton>
    </ItemPanel>
  );
}

export default TodoItem;

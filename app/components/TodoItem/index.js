/**
*
* TodoItem
*
*/

import React from 'react';

import ItemPanel from "./ItemPanel";
import CloseButton from "./CloseButton";
import ItemCheckbox from "./ItemCheckbox";

function TodoItem(props) {
  return (
    <ItemPanel done={props.item.done} className="panel panel-default">
      <label className="checkbox-inline">
        <ItemCheckbox type="checkbox" onClick={() => props.onDone(props.index)}/>
        {props.index + 1}. {props.item.name}
      </label>
      <CloseButton>
        <span className="glyphicon glyphicon-remove"></span>
      </CloseButton>
    </ItemPanel>
  );
}

export default TodoItem;

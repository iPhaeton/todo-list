import React from 'react';

export default function (props) {
  return (
    <button onClick={() => props.onClick(props.buttonFlag)} className={props.buttonFlag === props.listFlag ? "btn btn-default" : ""}>{props.value}</button>
  )
}
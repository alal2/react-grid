import React ,{Component} from 'react';

let CountRow = (props) => (
   <div className ="count">Count :<span className = "badge">{props.count}</span></div>
);

export default CountRow;
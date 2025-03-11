import React from "react";
import { MouseEventHandler, ClipboardEvent, useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
//PascalCasing
function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
    <h1>{heading}</h1>
    {items.length === 0? <p>No item found</p> : null};

      <ul className="list-group">
      {items.map((item, index) => (
        <li className= {selectedIndex===index?'list-group-item active aria-current="true"': 'list-group-item'}
        key={item}
        onClick={()=>{
          setSelectedIndex(index);
        }}>
        {item}
        </li>
      ))}
      </ul>
        
    </>
  );
}
export default ListGroup;

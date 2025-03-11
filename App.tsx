import { useState } from "react";
//import Message from "./Message";
//import reactLogo from "./assets/react.svg";
//import bootstrap from 'node_modules\bootstrap\dist\css\bootstrap.css';
import ListGroup from "./ListGroup";

function App() {
  // return (
  //   Message('Adam')
  // );
  let items = [
    "Samir pise pola ghure",
    "Sami never cared for Sofia",
    "Hello Razeen, bhallagse pic paia?",
    "What? Anirban liked her a lot",
    "Sofia was just another option",
  ];
  return (
    <div>
      <ListGroup items={items} heading={"cities"} />
    </div>
  );
}

export default App;

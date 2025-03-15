import { useState } from "react";
import { BsBatteryFull } from "react-icons/bs";

//import Message from "./Message";
//import reactLogo from "./assets/react.svg";
//import bootstrap from 'node_modules\bootstrap\dist\css\bootstrap.css';
//If we click on this button, we should treat state objects as immutable or readable
import ListGroup from "./ListGroup";
import Button from "./Button";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    // const newDrink = {
    //   title: drink.title,
    //   price: 6
    // }
    setDrink({...drink, price: 6});
    //setDrink(newDrink);
  };
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [isLoading, setLoading] = useState(false);
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   secondName: "",
  // });
  // const fullName = firstName + " " + lastName;
  // return <div>{fullName}</div>;
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

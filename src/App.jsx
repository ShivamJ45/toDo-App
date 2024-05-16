import "./App.css";
import { useState } from "react";
import ToDoList from "./Components/ToDoItems";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItem) => {
      return oldItem.filter((arrElement,index) => {
        return index!==id;
      })
    })
}

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1 className="heading">ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>

          <ul>
            {items.map((itemVal, index) => {
              return <ToDoList text={itemVal} key={index} id={index} onSelect={deleteItem} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

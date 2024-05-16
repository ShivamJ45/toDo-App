const ToDoItems = (props) => {
    

  return (
    <>
      <div className="listStyle">
        <i className="fa-solid fa-circle-xmark" onClick={() => {
            props.onSelect(props.id);
        }}></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoItems;

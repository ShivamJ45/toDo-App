const ToDoItems = (props) => {
    

  return (
    <>
      <div className="listStyle">
        
        <li><i className="fa-solid fa-circle-xmark" onClick={() => {
            props.onSelect(props.id);
        }}></i> {props.text}</li>
      </div>
    </>
  );
};

export default ToDoItems;

import Todo from "../Todo";

function TodoList({ todoItems, addTodo }) {
//   const renderLi = (item) => {
//     return (
//       <li className="todo-list-item">
//         <span>{item}</span>
//       </li>
//     );
//   };
  return (
    <div className="todo-list">
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoItems.map(item => <Todo item={item}/>)} 
        {/* {todoItems.map((item) => renderLi(item))} */}
      </ul>
    </div>
  );
}

export default TodoList;

import { useState } from "react";
import TodoList from "./components/TodoList";
import { DATA } from "./data/Data";
import Hobbies from "./components/Hobbies";
import "./App.css"
const App = () => {

  const [todoItems, setTodoItems] = useState(DATA);

  const addTodo = () => {
    setTodoItems([
      ...todoItems,
      'more about todo'
    ])
  }

 return (
    <div className="app">
      <TodoList todoItems={todoItems} addTodo={addTodo}/>
      <Hobbies/>
    </div>
  );
};

export default App;

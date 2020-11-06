import { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from './Todos'
import { DivWrapper, Title } from './Styles/AppStyle'

function App() {

  const [allTodos, setAllTodo] = useState([
    {
      id: 1,
      content: "Go To market"
    }
  ])

  const addTodo = (todo) => {
    setAllTodo([...allTodos, todo])
  }

  const deleteTodo = (todo) => {
    const newTodos = allTodos.filter(item => item.id !== todo.id)
    setAllTodo(newTodos)
  }

  return (
    <DivWrapper>
      <Title>Todo's</Title>
      <AddTodo addTodo={addTodo} />
      <Todos todos={allTodos} deleteTodo={deleteTodo} />
    </DivWrapper>
  );
}

export default App;

import React from 'react'
import './Styles/TodosStyle'
import {P} from './Styles/TodosStyle'

function Todos(props) {

    const allTodos = props.todos.length ? props.todos.map(todo =>
        <P onClick={() => props.deleteTodo(todo)} key={todo.id}>
            {todo.content}
        </P>
    )
        : <P>Nothing to show</P>

    return <> {allTodos}</>
}

export default Todos

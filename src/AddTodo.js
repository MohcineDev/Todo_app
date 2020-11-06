import React, { useState } from 'react'
import { Label, Input } from './Styles/AppStyle'

function AddTodo(props) {

    const [Todo, setTodo] = useState({
        content: ''
    })
    const handleChange = (e) => {
        //so i can add an id    
        setTodo({ ...Todo, content: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ///add an id
        Todo.id = Math.floor(Math.random() * 10000)
        props.addTodo(Todo)

        setTodo({
            content: ''
        })
    }

    return <form onSubmit={(e) => handleSubmit(e)}>
        <Label>Todo : </Label>
        <Input type="text" id="content" onChange={(e) => handleChange(e)} value={Todo.content} />
    </form>

}

export default AddTodo

import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <i class="material-icons tiny" onClick={() => deleteTodo(todo.id)}>clear</i>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos

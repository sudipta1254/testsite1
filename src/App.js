import React, { Component } from "react"
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    this.setState({
      todos: this.getSetTodo(0, 0)
    })
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos })
    this.getSetTodo(todos, 1)
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({ todos })
    this.getSetTodo(todos, 1)
  }
  getSetTodo = (item, id = 0) => {
    if (id)
      localStorage.setItem('todos', JSON.stringify(item))
    else
      return JSON.parse(localStorage.getItem('todos'))
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

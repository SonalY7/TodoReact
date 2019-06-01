import React, { Component } from "react";
import TodoItemContainer from "./TodoItemContainer";
import AddTodo from "./AddTodoContainer";

class Todo extends Component {
  render() {
    return (
      <div>
        <div className="todoMainDiv">
          <AddTodo />
        </div>
        <div className="todoList">
          <ul>
            {this.props.todo.map(currentTodo => {
              return (
                <li key={currentTodo.id}>
                  <TodoItemContainer todoItem={currentTodo} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;

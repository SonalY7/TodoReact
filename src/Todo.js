import React, { Component } from "react";
import TodoItemContainer from "./TodoItemContainer";

class Todo extends Component {
  componentDidMount() {
    this.props.actions.makeTodoList();
  }

  handleAdd = e => {
    e.preventDefault();
    this.props.actions.addTodoItem(this.inputElement.value);
  };

  render() {
    return (
      <div>
        <div className="todoMainDiv">
          <div className="todoAddDiv">
            <form onSubmit={this.handleAdd} className="todoForm">
              <input
                placeholder="Task.."
                ref={input => (this.inputElement = input)}
                className="todoTextInput"
              />
              <button type="submit" className="todoTextSubmit">
                Write Task
              </button>
            </form>
          </div>
        </div>
        <div className="todoList">
          <ul>
            {this.props.items.map(todo => (
              <li key={todo.id}>
                <TodoItemContainer
                  todo={todo}
                  items={this.props.items}
                  makeTodoList={this.props.actions.makeTodoList}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;

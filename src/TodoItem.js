import React, { Component } from "react";

class TodoItem extends Component {
  handleDelete(id) {
    this.props.actions.deleteTodoItem(id);
  }

  handleUpdateTodo(id) {
    this.props.actions.updateTodo(id, this.inputElement.value);
  }

  handleCheck = e => {
    this.props.actions.markDone(e.target.value, e.target.checked);
  };

  render() {
    return (
      <div>
        <input
          className="markdone"
          type="checkbox"
          name="checkbox"
          value={this.props.todo.id}
          onChange={this.handleCheck}
          defaultChecked={this.props.todo.done}
        />
        <input
          className="inputUpdateText"
          type="text"
          defaultValue={this.props.todo.text}
          ref={input => (this.inputElement = input)}
        />
        <button
          className="crud"
          type="submit"
          onClick={() => {
            this.handleUpdateTodo(this.props.todo.id);
          }}
        >
          Update
        </button>
        <button
          className="crud"
          type="submit"
          onClick={() => {
            this.handleDelete(this.props.todo.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;

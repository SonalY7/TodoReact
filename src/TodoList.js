import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  // listing todos.
  componentDidMount() {
    this.props.actions.makeTodoList();
  }

  handleInput = e => {
    const item = { text: e.target.value, key: Date.now() };
    this.props.actions.setCurrentTodo(item);
  };

  // add a todo item.
  handleAdd = e => {
    e.preventDefault();
    this.props.actions.addTodoItem();
  };

  // delete a todo item.
  handleDelete(id) {
    this.props.actions.deleteTodoItem(id);
  }

  // update a todo item.
  handleUpdate = e => {
    this.props.actions.setUpdateTodo(e.target.value);
  };

  handleUpdateTodo(id) {
    this.props.actions.updateTodo(id);
  }

  // check a todo item as done.
  handleCheck = e => {
    this.props.actions.markDone(e.target.value, e.target.checked);
  };

  render() {
    return (
      <div>
        <div className="todoMainDiv">
          <div className="todoAddDiv">
            <form onSubmit={this.handleAdd} className="todoForm">
              <input
                placeholder="Task.."
                ref={this.inputElement}
                value={this.currentItem}
                onChange={this.handleInput}
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
                <input
                  className="markdone"
                  type="checkbox"
                  name="checkbox"
                  value={todo.id}
                  onChange={this.handleCheck}
                  defaultChecked={todo.done}
                />
                <input
                  className="inputUpdateText"
                  type="text"
                  defaultValue={todo.text}
                  value={this.props.updatedText}
                  onChange={this.handleUpdate}
                  ref={this.inputElement}
                />
                <button
                  className="crud"
                  type="submit"
                  onClick={() => {
                    this.handleUpdateTodo(todo.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="crud"
                  type="submit"
                  onClick={() => {
                    this.handleDelete(todo.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;

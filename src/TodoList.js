import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const url = "http://localhost:8000/api/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      updatedValue: "",
      checked: "f",
      checkID: null,
      currentItem: { text: "", key: "" }
    };
  }

  // add a todo item.
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      fetch("http://localhost:8000/api/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("auth_token")
        },
        body: JSON.stringify({ text: newItem.text })
      })
        .then(result => result.json())
        .then(item => {
          var prevState = this.state.items.slice();
          prevState.push(item);
          this.setState({ items: prevState });
        })
        .catch(err => err);
    }
  };

  // listing todos.
  componentDidMount() {
    if (localStorage.getItem("auth_token") === null) {
      return <Redirect to="/" />;
    } else {
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("auth_token")
        }
      })
        .then(result => result.json())
        .then(items => this.setState({ items }))
        .catch(err => err);
    }
  }

  // delete a todo item.
  deleteTodo(id) {
    fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth_token")
      }
    })
      .then(result => result.json())
      .then(item => {
        let prevState = this.state.items.slice();
        let index = prevState.indexOf(item);
        prevState.splice(index, 1);
        this.setState({ items: prevState });
      });
  }

  // update a todo item.
  handleUpdate = e => {
    this.setState({ updatedValue: e.target.value });
  };

  updateTodo(id) {
    const updatedText = this.state.updatedValue;
    const checkDone = this.state.checked;
    console.log(updatedText);
    if (updatedText !== "") {
      fetch(url + "/" + id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("auth_token")
        },
        body: JSON.stringify({ text: updatedText, done: checkDone })
      }).then(console.log("updating"));
    }
  }

  // check a todo item as done.
  handleCheck = e => {
    this.setState(
      { checked: e.target.checked, checkID: e.target.value },
      this.markItDone
    );
  };

  markItDone() {
    const id = this.state.checkID;
    const check = this.state.checked;
    console.log(id);
    fetch("http://localhost:8000/api/donetodos/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth_token")
      },
      body: JSON.stringify({ done: check })
    }).then(console.log("checking....."));
  }

  render() {
    return (
      <div>
        <div className="todoMainDiv">
          <div className="todoAddDiv">
            <form onSubmit={this.addItem} className="todoForm">
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
            {this.state.items.map(todo => (
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
                  value={this.state.value}
                  onChange={this.handleUpdate}
                  ref={this.inputElement}
                />
                <button
                  className="crud"
                  type="submit"
                  onClick={() => {
                    this.updateTodo(todo.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="crud"
                  type="submit"
                  onClick={() => {
                    this.deleteTodo(todo.id);
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

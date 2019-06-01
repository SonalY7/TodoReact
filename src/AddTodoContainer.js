import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";

const add_Todo = gql`
  mutation AddTodo($text: String) {
    addTodo(text: $text) {
      id
      text
      done
    }
  }
`;

const get_Todos = gql`
  query todoList {
    todos {
      id
      text
      done
    }
  }
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation
      mutation={add_Todo}
      update={(cache, { data: { addTodo } }) => {
        const { todos } = cache.readQuery({ query: get_Todos });
        cache.writeQuery({
          query: get_Todos,
          data: { todos: todos.concat([addTodo]) }
        });
      }}
    >
      {(addTodo, { data }) => (
        <div className="todoAddDiv">
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { text: input.value } });
              input.value = "";
            }}
            className="todoForm"
          >
            <input
              placeholder="Task.."
              ref={node => {
                input = node;
              }}
              className="todoTextInput"
            />
            <button type="submit" className="todoTextSubmit">
              Write Task
            </button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default AddTodo;

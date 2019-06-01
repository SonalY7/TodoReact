import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";

const get_Todos = gql`
  query todoList {
    todos {
      id
      text
      done
    }
  }
`;

const Delete_Todo = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      text
    }
  }
`;

const DeleteTodo = ({ id }) => {
  return (
    <Mutation
      mutation={Delete_Todo}
      update={(cache, { data: { deleteTodo } }) => {
        const { todos } = cache.readQuery({ query: get_Todos });
        cache.writeQuery({
          query: get_Todos,
          data: { todos: todos.filter(todo => todo.id !== id) }
        });
      }}
    >
      {(deleteTodo, { data }) => (
        <button
          className="crud"
          onClick={e => {
            deleteTodo({
              variables: {
                id
              }
            });
          }}
        >
          Delete
        </button>
      )}
    </Mutation>
  );
};

export default DeleteTodo;

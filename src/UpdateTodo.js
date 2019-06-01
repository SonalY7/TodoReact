import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";

const Update_Todo = gql`
  mutation UpdateTodo($id: Int!, $text: String) {
    updateTodo(id: $id, text: $text) {
      id
      text
    }
  }
`;

const UpdateTodo = ({ id, text }) => {
  return (
    <Mutation mutation={Update_Todo}>
      {(updateTodo, { data }) => (
        <button
          className="crud"
          onClick={e => {
            updateTodo({
              variables: {
                id,
                text
              }
            });
          }}
        >
          Update
        </button>
      )}
    </Mutation>
  );
};

export default UpdateTodo;

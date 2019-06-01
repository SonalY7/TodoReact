import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";

const Update_Marked_Done = gql`
  mutation UpdateMarkedDone($id: Int!, $done: Boolean) {
    updateTodo(id: $id, done: $done) {
      id
      done
    }
  }
`;

const UpdateMarkedDone = ({ todo }) => {
  return (
    <Mutation mutation={Update_Marked_Done}>
      {(updateTodo, { data }) => (
        <input
          className="markdone"
          type="checkbox"
          name="checkbox"
          value={todo.id}
          onChange={e => {
            updateTodo({
              variables: {
                id: todo.id,
                done: e.target.checked
              }
            });
          }}
          defaultChecked={todo.done}
        />
      )}
    </Mutation>
  );
};

export default UpdateMarkedDone;

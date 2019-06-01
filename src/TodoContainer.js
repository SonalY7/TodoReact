import React, { Component } from "react";
import Todo from "./Todo";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const get_Todos = gql`
  query todoList {
    todos {
      id
      text
      done
    }
  }
`;

class TodoContainer extends Component {
  render() {
    return (
      <div>
        <Query query={get_Todos}>
          {({ loading, error, data }) => {
            if (loading || !data) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return <Todo todo={data.todos} />;
          }}
        </Query>
      </div>
    );
  }
}

export default TodoContainer;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = state => {
  return {
    delete: todoText => dispatchEvent({type: 'DELETE_TODO', payload: todoText})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

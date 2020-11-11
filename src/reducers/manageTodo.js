import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {

  //action = {type: "ADD_TODO", payload: {text: "hello world!!", type: "ADD_TODO"}}

  //action.type = "ADD_TODO"

  //action.payload: {text: "hello world!!"}

  //state is an array of todo items

  //state.todos = [{id: ergaoerigjaeog-38532-erogjnaeog, text: "hello world!!"}]

  //action.payload is undefined at first, and then is assigned an id after a todo item is submitted

  switch (action.type) {
    case 'ADD_TODO':

      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':

      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}

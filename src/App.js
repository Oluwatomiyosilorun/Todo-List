import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';
import axios from 'axios';


class App extends React.Component {
      state = {
        todos: []
      }

      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => this.setState({todos: res.data}))
      }
  // to show the completed task
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return(todo);
    }) });
  }

  //Delete
  delTodo = (id) =>{
    // this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]});
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }));
  }

  //addTodo
  addTodo = (title) => {
    // const newTodo ={
    //   id: uuid.v4(),
    //   title,
    //   completed:false
    // }
    // this.setState({todos:[...this.state.todos, newTodo]});
    axios.post('https://jsonplaceholder.typicode.com/todos', 
    {title, 
    completed:false
    })
      .then(res => this.setState({todos:[...this.state.todos, res.data] }))
  }
  render(){
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddToDo addTodo={this.addTodo}/>
        < Todos todos = {
          this.state.todos
        }
        markComplete = {
          this.markComplete
        }
        delTodo={
          this.delTodo
        }
        />
      </div>
    </div>
  );
  }
}

export default App;

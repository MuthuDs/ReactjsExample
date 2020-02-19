import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
//import axios from 'axios';
import uuid from 'uuid';
import './App.css';

class App extends Component {
   state={
    todos:[
      {
        id:uuid.v4(),
        title:'indian',
        completed:true
      },
      {
        id:uuid.v4(),
        title:'american',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'chinese',
        completed:false
      },
    ]
  }
  // state={
  //   todos:[]
  // }

  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({todos:res.data}));
  // }

markComplete =(id)=>{
  this.setState(
    {todos:this.state.todos.map(todo=>{
      if(todo.id===id)
      {
        todo.completed=!todo.completed
      }
      return todo;
    }  
      )}
  )
}

delTodo=(id)=>{
   this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id) ]});

}

addTodo=(title)=>
{
  const newTodo={
    id:uuid.v4(),
    title,
    completed:false
  } 
  // axios
  // .post('https://jsonplaceholder.typicode.com/todos', {
  //   title,
  //   completed: false
  // })
  // .then(res => {
  //   res.data.id = uuid.v4();
  //   this.setState({ todos: [...this.state.todos, res.data] });
  // });
 this.setState({ todos: [...this.state.todos, newTodo] });
}
  render()
  {
       return (
         <Router>
            <div className="App">
              <div className="container">
                <Header></Header>
                <Route exact path="/" render={props =>(
                  <React.Fragment>
                       <Addtodo addTodo={this.addTodo}/>
                       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                  </React.Fragment>
                )}/>
                <Route path="/about" component={About} />  
                <Route path="/contact" component={Contact}/>
              </div>    
            </div>
        </Router>
              );
  }
}

export default App;

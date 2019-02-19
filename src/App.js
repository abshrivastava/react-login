import React from 'react';
import './App.css';

//Parent Class
class App extends React.Component {
  constructor(props){
    super(props) 
      this.state= {
        EmpName: "Abhishek"
      }
    }
submitData= (e) => {
  e.preventDefault()
  this.setState({
    EmpName: this.refs.userName.value
  })
}

// userList = (userName) => {
//   this.setState({
//     EmpName: this.state
//   })
//   console.log("userName>>", userName)

// }

render() {
  return(
      <div>
        <form onSubmit={this.submitData}>
          <input type="text" ref="userName" width="230" />
          <button type="submit">Submit Detail</button>
        </form>
        <Dashboard EmpName= {this.state.EmpName} userData= {this.userList} />
      </div>
    )
  }
}

// Dashboard child component
class Dashboard extends React.Component {

  deleteItem= () => {
    console.log("Deleted items>>")
  }
  render() {
    return(
      <div>
        <ul>
            <li>{this.props.EmpName}<button onClick= {this.deleteItem}>Delete</button></li>
        </ul>
      </div>
    )
  }
}

export default App






// class Todos extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = { todos: [], text: '' };
//       this.removeTodo = this.removeTodo.bind(this);
//   }

//   addTodo(e) {
//       e.preventDefault();
//       this.setState({ 
//         todos: [ this.state.text, ...this.state.todos ],
//         text: ''
//       });
//   }

//   removeTodo(name, i){
//       let todos = this.state.todos.slice();
//       todos.splice(i, 1);
//       this.setState({
//           todos
//       });
//   }

//   updateValue(e) {
//       this.setState({ text: e.target.value})
//   }

//   render() {
//       return(
//           <div>
//               <form onSubmit = {(e) => this.addTodo(e)}>
//                   <input
//                       placeholder="Add Todo"
//                       value={this.state.text}
//                       onChange={(e) => {this.updateValue(e)}}
//                   />
//                   <button type="submit">Add Todo</button>
//               </form>
//               <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
//           </div>
//       );
//   }
// }

// class TodoList extends React.Component {

//   removeItem(item, i) {
//       this.props.removeTodo(item, i);
//   }

//   render() {
//       return(
//           <ul>
//               { this.props.todos.map((todo,i) => {
//                   return <li onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
//               })}
//           </ul>
//       );
//   }
// }

// ReactDOM.render(<Todos/>, document.getElementById('app'))

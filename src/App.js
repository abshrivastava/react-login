import React from 'react';
import './App.css';

//Parent Class
class App extends React.Component {
  constructor(props){
    super(props) 
      this.state= {
        EmpName: [{id: 1, name: "Abhishek1"}, {id: 2, name: "Abhishek2"}, {id: 3, name: "Abhishek3"}]
      }
    }
submitData= (e) => {
  e.preventDefault()
  this.setState({
    EmpName: []
    // EmpName: [{id: 1, name: "Abhishek1"}, {id: 2, name: "Abhishek2"}, {id: 3, name: "Abhishek3"}]
  }
  )
}

deleteUser = (userData) => {
  console.log("userData",userData)
  this.state.EmpName.splice(userData-1,userData)
}

render() {
  return(
      <div>
        <form onSubmit={this.submitData}>
          <input type="text" ref="userName" width="230" />
          <button type="submit">Submit Detail</button>
        </form>
        <Dashboard EmpName = {this.state.EmpName} deleteUser= {this.deleteUser} />
        {/* <Dashboard EmpName = {this.state.EmpName} /> */}
      </div>
    )
  }
}

// Dashboard child component
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem=(data) => {
    console.log("Deleted items>>",data)
    // this.props.EmpName.splice(data-1,data)
    // delete this.props.EmpName[data]
    // let index = this.props.EmpName.indexOf(data)
    // console.log("index>>>", index)
    // let resData= this.props.EmpName.splice(data,1)
    // console.log("resData val>>",resData[0])
    this.props.deleteUser(data)
  }
  render() {
    return(
      <div>
        <ul>
          {
            this.props.EmpName.map((ans, i) => {
            return (<li key={i}>{ans.name}<button onClick={event=>this.deleteItem(ans.id)}>Delete</button></li>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default App






// class Todo extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       name: 'Simple React TODO list',
//       count: 0,
//       tasks: ['just', 'simple', 'thing']
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.handleClickIndex = this.handleClickIndex.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleClick(event){
//     eval(this[event.target.name]).bind(this)(event)
//   }
//   handleClickIndex(index, event){
//     eval(this[event.target.name]).bind(this)(index, event)
//   }
//   handleChange(event){
//     eval(this[event.target.name]).bind(this)(event)
//   }
//   handleSubmit(event){
//     event.preventDefault()
//     eval(this[event.target.name]).bind(this)(event)
//   }
//   task(event) {
//     this.setState({task:event.target.value})
//   }
//   addTask(event) {
//     if (!this.state.task) return
//     const tasks = this.state.tasks || []
//     tasks.push(this.state.task)
//     this.setState({tasks:tasks, task:''})
//   }
//   removeTask(index, event) {
//     const tasks = this.state.tasks
//     tasks.splice(index, 1)    
//     this.setState({tasks})
//   }
//   render(){
//     const tasks = (this.state.tasks||[]).map((task,index)=>(
//       <li>
//         {task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
//       </li>
//     ))
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <div>
//           <ol>
//             {tasks}
//             {
//               this.state.task &&
//               <li>{this.state.task}</li>
//             }
//           </ol>
//           <div>
//             <form name="sendTask" onSubmit={this.handleSubmit}>
//               <input name="task" value={this.state.task} onChange={this.handleChange}/>
//               <button type="submit" name="addTask" onClick={this.handleClick}>Add</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Todo/>,
//   document.getElementById('root')
// );








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

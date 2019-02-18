import React from 'react';
import './App.css';
import axios from 'axios';

//stateless component for Dashboard
const Dashboard = ({userName, inlogOut}) => {
  return(
    <div>
      Welcome<strong className="red-text">{userName}</strong>!!!
      <button onClick={inlogOut}>LogOut</button>
    </div>
  )
}

//Parent Class
class App extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        islogIn: false,
        isError: false,
        uesrInfo: {
          username: null,
          password: null
        }
      }
    }

//API call
componentDidMount() {
  axios.get(`http://dummy.restapiexample.com/api/v1/employee/16300`)
  .then(response => {
    let userdata = response.data
    this.setState({
     uesrInfo: {
        userName: userdata.employee_name,
        userPass: userdata.employee_salary
      }
    })
  })
}

//Login data getting from childreen
signIn= (userName, userPass) => {
  if((this.state.uesrInfo.userName === userName) && (this.state.uesrInfo.userPass === userPass)) {
    this.setState({
      islogIn: true,
      isError: false
    })
    console.log("Success")
  } else {
    this.setState({
      isError: true
    })
    console.log("Reject")
  }
}

//logout section
logOut= () => {
  this.setState({
    islogIn: false
  })
}

render() {
  return(
      <div>
        {
          (this.state.islogIn) ?
          <Dashboard inlogOut= {this.logOut} userName= {this.state.uesrInfo.userName} />
          :
          <Login insignIn={this.signIn} isError= {this.state.isError} />
        }
      </div>
    )
  }
}

//Login Page
class Login extends React.Component {
  submission = (e) => {
    e.preventDefault()
    let userName = this.refs.name_info.value
    let userPass = this.refs.password.value
    this.props.insignIn(userName, userPass)
  }
  render() {
    return(
      <div>

        <div onSubmit={this.submission}>
        <form>
        {
          this.props.isError &&
          <div className="red-text">Please Fill Correct User Name And Password</div>  
        }
          <input type="text" placeholder="Please Insert Your Name" ref="name_info" /><br />
          <input type="text" placeholder="Please Insert Your Password" ref="password" /><br />
          <button type="submit">LogIn</button>
        </form>
        </div>
      </div>
    )
  }
}

export default App

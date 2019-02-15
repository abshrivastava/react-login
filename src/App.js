import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasLogin:false,
      user: {
        username:null,
        password:null
      }
    }
  }

  componentDidMount() {
    axios.get(`http://dummy.restapiexample.com/api/v1/employee/16300`)
      .then(res => {
        const fetchUser = res.data
        this.setState({
          user: {
            username:fetchUser.employee_name,
            password:fetchUser.id
          }
        })
        console.log("this.state", fetchUser)
      })
  }
  
  signIn = (username, password) => {
    if (username === this.state.user.username && password === this.state.user.password) {
      this.setState({hasLogin:true})
    } 
    console.log("this.state>>>>>>>",this.state)
  }
  
  render() {
    return (
      <div>
        <h1>My Application</h1>
        {
          (this.state.hasLogin) ?
            <Welcome />
            :
            <LoginForm onSignIn= {this.signIn} />
        }
      </div>
    ) 
  }
}

class LoginForm extends Component {
  handleSignIn = (e) => {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  render() {
    return(
      <form onSubmit={this.handleSignIn}>
      <h3>Sign in</h3>
        <div className="red-text">Username password is wrong</div>
      <input type="text" ref="username" placeholder="enter you username" />
      <input type="password" ref="password" placeholder="enter password" />
      <input type="submit" value="Login" />
    </form>
    )
  }
}

class Welcome extends Component {
  render() {
    return(
      <div>
        Welcome!!!
      </div>
    )
  }

}

export default App;

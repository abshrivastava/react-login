import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//stateless component
const Welcome = ({user, onSignOut}) => {
  console.log("Welcome>>>")
  return(
    <div>
      Welcome<strong>{user}</strong>!!!
      <button onClick= {onSignOut}>Logout</button>
    </div>
  )
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasLogin:false,
      loginError:false,
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
      this.setState({hasLogin:true, loginError:false})
    } else { this.setState({ loginError:true })}
    console.log("this.state>>>>>>>",this.state)
  }
  signOut = () => {
    let hasLogin = false
    this.setState({ hasLogin })
    console.log("signOut>>>", hasLogin)
  }
  
  render() {
    return (
      <div>
        <h1>My Application</h1>
        {
          (this.state.hasLogin) ?
            <Welcome user={this.state.user.username} onSignOut= {this.signOut} />
            :
            <LoginForm onSignIn= {this.signIn} loginError= {this.state.loginError} />
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
      {
        this.props.loginError &&
        <div className="red-text">Username password is wrong</div>
      }
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
      
    </form>
    )
  }
}

export default App;

import React from 'react'
import { Link } from "react-router-dom";
import './LoginSignup.css'
import './App.css';
import Cookies from "universal-cookie";

const cookies =new Cookies();

class LoginSignup extends React.Component{
  constructor(props){
    super(props);
  this.state= {
    username: "",
    password: "",
    error: "",
    isAuthenticated: false,
  };
  }
  
  componentDidMount = () => {
    this.getSession();
  }
  
  getSession = () => {
    fetch("/api/session/",{
      credentials: "same-origin",
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      if (data.isAuthenticated){
        this.setState({isAuthenticated: true});
      }else{
        this.setState({isAuthenticated: false});
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  whoami = () => {
    fetch("/api/whoami/",{
      headers:{
        "Content-Type":"application/json",
      },
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("You're logged in as" + data.username);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleUserNameChange = (event) => {
    this.setState({username: event.target.value});
  }

  isResponseOk(response){
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    }else{
      throw Error(response.statusText);
    } 
   }

   login = (event) => {
    event.preventDefault();
    //Make a Post request to api/login
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"), //includes csrf token
      },
      credentials: "same-origin",
      body: JSON.stringify(
        {username: this.state.username,
        password: this.state.password}),
    })
    .then(this.ifResponseOk)
    .then((data)=>{
      console.log(data);
      this.setState({isAuthenticated: true, username: "",
    password: "", error: ""});
    })
    .catch((err)=>{
      console.log(err);
      this.setState({error: "Wrong username or password"});
    });
   }

   //logout method
   logout = () => {
    fetch("/api/logout", {
      credentials : "same-origin",
      headers: {
        "X-CSRFToken": cookies.get("csrftoken"),
      },
    })
    .then(this.isResponseOk)
    .then((data) => {
      console.log(data);
      this.setState({isAuthenticated: false});
    })
    .catch((err)=>{
      console.log(err);
    });
   };

   render() {
    if (!this.state.isAuthenticated) {
      return(
        <div className='container mt-3'>
          <h1>React Cookie Auth</h1>
          <br/>
          <h2>Login</h2>
          <form onSubmit={this.login}>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              className='form-control' 
              id='username'
              name="username"
              value={this.state.username}
              onChange={this.handleUserNameChange} 
              />
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              className='form-control' 
              id='password' 
              name='password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
              />
              <div>
                {this.state.error && <small className='text-danger' >
                  {this.state.error}
                  </small>}
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>LOGIN</button>
          </form>
        </div>
      );
    }
    return (
      <div className="container mt-3">
      <h1>React Cookie Auth</h1>
      <p>You are logged in</p>
      <Link to="/whoami" className="btn btn-primary mr-2">
        WhoAmI
      </Link>
      <button className="btn btn-danger" onClick={this.logout}>
        LOG OUT
      </button>
    </div>
    )
   }
}

export default LoginSignup
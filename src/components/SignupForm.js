import React, {Component} from 'react';
import axios from 'axios';

const margin = {
  marginTop: "10px"
}


class SignupForm extends Component{


  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      password_confirmation: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
      this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    axios.post('http://127.0.0.1:8080/api', this.state);
  }

  render(){
    return(
      <form  onSubmit={this.onSubmit}>
        <h2 className="form-signin-heading">SIGN UP</h2>
        <label className="sr-only">Email address</label>
        <input
        type="email"
        id="inputEmail"
        className="form-control"
        onChange = {this.onChange}
         style={margin}
        name="username"
        placeholder="Email address" required autoFocus />

        <label  className="sr-only">Password</label>
        <input
        type="password"
        id="inputPassword"
        className="form-control"
        onChange = {this.onChange}
        name= "password"
         style={margin}
        placeholder="Password" required />

        <label className="sr-only">Confirm Password</label>
        <input
         style={margin}
        type="password"
        id="Password2"
        className="form-control"
        onChange = {this.onChange}
        name = "password_confirmation"
        placeholder="Password Confirmation" required autoFocus />


        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      </form>
    );
  }
}


export default SignupForm;

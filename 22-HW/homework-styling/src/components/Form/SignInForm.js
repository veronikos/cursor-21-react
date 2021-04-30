import classNames from "classnames";
import {
  avatar_holder_flex,
  avatar,
  avatar_holder,
  box,
  checkbox,
  input,
  button,
} from "./Form.module.css";
import padlock from "./padlock.png";
import React, { Component } from "react";
import { userInfo } from './SignUpForm'

class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    rememberMe: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value })
  };

  handleFormSubmit = () => {
    const { email, rememberMe, password } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? email : "");
    localStorage.setItem("password", rememberMe ? password : "");
    console.log(this.state)
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    this.setState({ email, rememberMe });
  }

  render() {
    return (
      <form>
        <div className={classNames(box)}>
          <div className={classNames(avatar_holder_flex)}>
            <div className={classNames(avatar_holder)}>
              <img alt="" src={padlock} className={classNames(avatar)} />
            </div>
          </div>

          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            className={classNames(input)}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            className={classNames(input)}
          />
          <div className={classNames(checkbox)}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={this.state.rememberMe}
              onChange={this.handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button className={classNames(button)} type="submit" onClick={this.handleFormSubmit}>
            Sign In
          </button>
          <p>
            Forgot your password? <u>Click Here!</u>
          </p>
        </div>
      </form>
    );
  }
}

export default SignInForm;

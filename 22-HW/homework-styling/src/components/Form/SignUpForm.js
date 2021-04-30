import classNames from "classnames";
import { Component } from "react";
import {
  avatar_holder_flex,
  avatar,
  avatar_holder,
  box,
  checkbox,
  input,
  button,
  name,
} from "./Form.module.css";
import padlock from "./padlock.png";

export let userInfo = []

export class SignUpForm extends Component {
  state = {
    name: "",
    last_name: "",
    email: "",
    password: "",
    receiveNews: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className={classNames(box)}>
          <div className={classNames(avatar_holder_flex)}>
            <div className={classNames(avatar_holder)}>
              <img alt="" src={padlock} className={classNames(avatar)} />
            </div>
          </div>

          <h1>Sign Up</h1>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="First name *"
            className={classNames(input, name)}
          />
          <input
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleChange}
            placeholder="Last name *"
            className={classNames(input, name)}
          />
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
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            className={classNames(input)}
          />
          <div className={classNames(checkbox)}>
            <input
              type="checkbox"
              id="receiveNews"
              name="receiveNews"
              checked={this.state.receiveNews}
              onChange={this.handleChange}
            />
            <label htmlFor="receiveNews">
              I want to receive inspiration, marketing, promotion and updates
              via email
            </label>
          </div>
          <button className={classNames(button)} onClick={this.handleFormSubmit}>Sign Up</button>
        </div>
      </div>
    );
  }
}

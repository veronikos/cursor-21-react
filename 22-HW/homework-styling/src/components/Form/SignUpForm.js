import classNames from "classnames";
import {
  avatar_holder_flex,
  avatar,
  avatar_holder,
  box,
  checkbox,
  input,
  button,
  name
} from "./Form.module.css";
import padlock from './padlock.png';

const SignUpForm = () => {
  return (
    <form method="post">
      <div className={classNames(box)}>
        <div className={classNames(avatar_holder_flex)}>
          <div className={classNames(avatar_holder)}>
            <img alt="" src={padlock} className={classNames(avatar)} />
          </div>
        </div>

        <h1>Sign Up</h1>
        <input
          type="text"
          name="First_name"
          placeholder="First name *"
          className={classNames(input, name)}
        />
        <input
          type="text"
          name="Last_name"
          placeholder="Last name *"
          className={classNames(input, name)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={classNames(input)}
        />
        <input
          type="password"
          name="email"
          placeholder="Password"
          onblur="field_blur(this, 'email');"
          className={classNames(input)}
        />
        <div className={classNames(checkbox)}>
          <input type="checkbox" id="rememberMe" />
          <label for="rememberMe">I want to receive inspiration, marketing, promotion and updates via email</label>
        </div>
        <button className={classNames(button)}>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;

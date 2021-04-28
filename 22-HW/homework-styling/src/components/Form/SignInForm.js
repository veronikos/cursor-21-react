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
import padlock from './padlock.png';

const SignInForm = () => {
  return (
    <form method="post">
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
          <label for="rememberMe">Remember me</label>
        </div>
        <button className={classNames(button)}>Sign In</button>
        <p>
          Forgot your password? <u>Click Here!</u>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;

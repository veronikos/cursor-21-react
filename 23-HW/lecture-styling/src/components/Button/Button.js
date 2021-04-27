import { primary, secondary, button } from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
  const { children, variant } = props;
  return (
    <button
      className={classNames(button, {
        [primary]: variant === "primary",
        [secondary]: variant === "secondary"
      })}
    >
      {children}
    </button>
  );
};

export default Button;

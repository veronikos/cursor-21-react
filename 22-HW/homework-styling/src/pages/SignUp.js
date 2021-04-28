import SignUpForm from "../components/Form/SignUpForm";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <SignUpForm></SignUpForm>
        <p>
        Already have an account?  <Link to="/signIn">Sign In!</Link>
        </p>
      </div>
  );
}

export default SignUp;

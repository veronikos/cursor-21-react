import SignInForm from "../components/Form/SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <SignInForm />
        <p>
          Don't have an account? <Link to="/signUp">Sign Up!</Link>
        </p>
      </div>
  );
}

export default SignIn;

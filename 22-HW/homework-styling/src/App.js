import "./App.css";
import Form from "./components/Form/Form";
import SignUpLink from "./components/Form/SignUpLink";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App_buttons">
        <Form />
        <SignUpLink />
      </div>
    </div>
  );
}

export default App;

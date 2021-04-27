import "./App.css";
import Button from "./components/Button/Button";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton/SecondaryButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Style</h1>

        <div className="App_buttons">
          <div className="App_buttonsRow">
            <PrimaryButton />
            <SecondaryButton />
          </div>
          <div>
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

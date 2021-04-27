import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton/SecondaryButton";
import "./App.css";
import Button from "./components/Button/Button";
import StyledButton from "./components/StyledButton/StyledButton";
import Nav from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import VercelButton from "./components/VercelButton/VercelButton";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="App__buttons">
        <div className="App__buttonsRow">
          <PrimaryButton />
          <SecondaryButton />
        </div>

        <div className="App__buttonsRow">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>

        <div className="App__buttonsRow">
          <StyledButton>Styled</StyledButton>
          <StyledButton variant="primary">Primary</StyledButton>
        </div>

        <div className="App__buttonsRow">
          <VercelButton>Vercel</VercelButton>
        </div>

        <Nav>
          <Title>Documentation</Title>
          <Button>Home</Button>
        </Nav>
      </div>
    </div>
  );
}

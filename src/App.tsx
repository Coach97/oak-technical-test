import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Container
        active={active}
        onActiveChange={setActive}
        title="My Container"
      />
    </>
  );
}

export default App;

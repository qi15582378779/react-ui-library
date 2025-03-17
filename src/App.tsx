import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg?url";
import "./App.css";
import { Icon, Button, Card, ThemeProvider } from "./index";
import icon from "./assets/icons/search.svg";
import icon1 from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Icon iconName="test" iconSize={[60, 60]} />
      <Icon iconName="user" iconColor="red" iconSize={40} />
      <Icon iconSrc={icon} iconSize={32} iconColor="blue" />
      <Icon iconSrc={icon1} iconSize={62} iconColor="blue" />
      <Icon iconSrc={"https://si.online/logo.svg"} iconColor="blue" />
      <Icon iconSrc="not-found" iconFallback={<span>🚫</span>} />

      <Button text="test" variant="neutral" />

      <ThemeProvider theme="green">
        <Card>
          <p>我是内容</p>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default App;

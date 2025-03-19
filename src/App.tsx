import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg?url";
import "./App.css";
import {
  Icon,
  Button,
  Card,
  ThemeProvider,
  Accordion,
  AccordionItem,
  Dialog,
} from "./index";
import icon from "./assets/icons/search.svg";
import icon1 from "/vite.svg";
import { useState } from "react";

function App() {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
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

      <div className="item">
        <h1>Icon</h1>
        <div className="flex" style={{ gap: "12px" }}>
          <Icon iconName="test" iconSize={[60, 60]} />
          <Icon iconName="user" iconColor="red" iconSize={40} />
          <Icon iconSrc={icon} iconSize={32} iconColor="blue" />
          <Icon iconSrc={icon1} iconSize={62} iconColor="blue" />
          <Icon iconSrc={"https://si.online/logo.svg"} iconColor="blue" />
          <Icon iconSrc="not-found" iconFallback={<span>🚫</span>} />
        </div>
      </div>

      <div className="item">
        <h1>Button</h1>
        <div className="flex" style={{ gap: "12px" }}>
          <Button text="test" />
          <Button text="test" variant="no-shadow" />
          <Button text="test" variant="no-shadow" disabled />
        </div>
      </div>

      <div className="item">
        <h1>Card</h1>
        <div className="flex" style={{ gap: "12px" }}>
          <Card width="300px" height="100px" scroll>
            <p>test</p>
            <div style={{ height: "400px" }}>ljklk</div>
          </Card>

          <Card>
            <Accordion>
              <AccordionItem title="标题1">
                <p>内容1</p>
              </AccordionItem>
              <AccordionItem title="标题2">
                <p>内容2</p>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>

      <div className="item">
        <h1>Accordion</h1>
        <div className="flex" style={{ gap: "12px" }}>
          <Accordion>
            <AccordionItem title="标题1">
              <p>内容1</p>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem title="标题1">
              <p>内容1</p>
            </AccordionItem>
            <AccordionItem title="标题1">
              <p>内容1</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="item">
        <h1>Dialog</h1>
        <div>
          <Button text="open" onClick={() => setDialogVisible(true)} />

          <Dialog
            visible={dialogVisible}
            onClose={() => setDialogVisible(false)}
            // footer={<div>footer</div>}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain="mumbai"
    clientId="22cc3e209b6464b4098706caff15d5c9"
    desiredChainId={ChainId.Mumbai}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);

// eM5WrWR4p64TXCMnxRytJfhaY1bZg-c6Ox9dP-HHw79YyRqAMMXIPCFaFCsQTiwBcVy8KAwEjXo9-hxKruuFMw-----private

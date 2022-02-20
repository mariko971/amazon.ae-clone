import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// import Store from "./store";
import { persistor, Store } from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    {/* <Router> */}
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);

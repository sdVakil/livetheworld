import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

import DrawerAppBar from "./components/Common/AppBar/AppBar";

import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DrawerAppBar />
          <Login />
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

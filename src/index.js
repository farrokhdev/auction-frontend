import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store, {persistor} from '../src/redux/store';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {PersistGate} from 'redux-persist/integration/react';
import "./assets/style/Main.scss";
import "./assets/style/style.scss";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={null}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

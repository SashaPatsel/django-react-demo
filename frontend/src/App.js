import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import Leads from "./leads/leads"
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/Alerts"

const alertOptions = {
  timeout: 3000,
  position: "top center"
}

function App() {

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
      {/* Shorthand for fragments */}
        <>
        <div></div>
        <Alerts/>
        <Leads/>
        </>
      </AlertProvider>
    </Provider>
  );
}

export default App;

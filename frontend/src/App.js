import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import Leads from "./leads/leads"

function App() {
  return (
    <Provider store={store}>
      <Leads></Leads>
    </Provider>
  );
}

export default App;

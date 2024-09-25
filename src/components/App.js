import React from "react";
import logo from './logo.svg';
import './App.css';
import Form from "./Form.js";

function App() {

  return (
    <div className="App">
       <h1>Temperature Converter</h1>
        <p>Enter the temperature, select units and click on convert</p>
        <Form />
       
    </div>
  );
}

export default App;

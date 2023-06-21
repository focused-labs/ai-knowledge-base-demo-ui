import React from 'react';
import './App.css';
import {QueryForm} from "./components/QueryForm";

function App() {
  return (
    <div className="App">
        <div className="Welcome">
        <h1>
          Welcome to the Focused Labs Knowledge Hub
        </h1>
        <QueryForm />
        </div>
    </div>
  );
}

export default App;

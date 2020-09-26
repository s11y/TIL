import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./TestComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App.tsx" />
      </header>
    </div>
  );
};

export default App;

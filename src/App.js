import React, { Component } from "react";
import "./App.css";
import SettingsButton from "./components/SettingsButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SettingsButton />
      </div>
    );
  }
}

export default App;

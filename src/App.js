import React, { useState, useEffect } from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Cupertino, US" />
      <div></div>
      <WeatherEngine location="Shanghai, CN" />
    </div>
  );
}

export default App;

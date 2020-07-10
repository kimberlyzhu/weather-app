import React, { useState, useEffect } from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Cupertino, US" />
      <WeatherEngine location="Shanghai, CN" />
      <WeatherEngine location="Los Angeles, US" />
      <WeatherEngine location="Boston, US" />
      <WeatherEngine location="London, UK" />
      <WeatherEngine location="Toronto, CA" />
    </div>
  );
}

export default App;

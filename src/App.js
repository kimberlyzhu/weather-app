import React from "react";
import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={80} condition="Clear" city="Cupertino" country="US" />
      <WeatherCard temp={100} condition="Haze" city="Shanghai" country="CN" />
      <WeatherCard
        temp={49}
        conditon="Clouds"
        city="Los Angeles"
        country="US"
      />
    </div>
  );
}

export default App;

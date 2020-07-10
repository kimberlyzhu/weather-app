import React from "react";
import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dddfe51d9e932708e36c71fd64e15b96"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  //.then statement has access to value of promise, then you can do something to value
  data().then((res) => {
    console.log("feels like is: " + res.main.feels_like);
    console.log("temp is: " + res.main.temp);
  });

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

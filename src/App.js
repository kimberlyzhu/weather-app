import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const [query, setQuery] = useState("Cupertino, US");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [country, setCountry] = useState("");

  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&APPID=dddfe51d9e932708e36c71fd64e15b96`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  //.then statement has access to value of promise, then you can do something to value
  // data().then((res) => {
  //   console.log("feels like is: " + res.main.feels_like);
  //   console.log("temp is: " + res.main.temp);
  // });
  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);
    });
  };

  return (
    <div className="App">
      <WeatherCard
        temp={temp}
        condition={condition}
        city={city}
        country={country}
      />
      <WeatherCard temp={100} condition="Haze" city="Shanghai" country="CN" />
      <WeatherCard
        temp={49}
        conditon="Clouds"
        city="Los Angeles"
        country="US"
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;

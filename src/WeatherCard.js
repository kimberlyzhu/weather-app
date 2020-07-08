import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="card">
      <div className="location">
        <h1 className="city">Cupertino</h1>
        <h3 className="country">US</h3>
      </div>
      <img className="icon" src="./img/sunny.png" />
      <h1 className="temp">70°F</h1>
      <h3 className="condition">Sunny</h3>
    </div>
  );
};

export default WeatherCard;

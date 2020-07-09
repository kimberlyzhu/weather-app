import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

//Hot weather 60->110 degrees F vs 12-> 40 degrees C
//Cold weather 25->60 degrees F vs -20->12 degrees C

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 60) {
    //for hot weather
    highColor = (1 - (temp - 60) / (110 - 60)) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    );`;
  } else if (temp <= 60) {
    //for cold weather
    highColor = (1 - (temp - 25) / (60 - 25)) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    );`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;

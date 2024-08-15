import React from "react";
import { useDataContext } from "./WeatherApp";
import { useStyleContext } from "./Context";

const Current = (): React.Component => {
  try {
    const data: any = useDataContext(),
      style: any = useStyleContext(),
      currentData = {
        desc: data.current.description,
        precipitation: `${data.current.precipitation}% chance`,
        temp: `${data.current.temp}\u00b0F`,
        humidity: `Humidity: ${data.current.humidity}%`,
        wind: `Wind: ${data.current.windDirection} ${data.current.windSpeed}`,
        city: data.current.city,
        state: data.current.state,
      };
    return (
      <div className={'current'}>
        <div>
          <h2 className={'currentTitle'}>
            {currentData.city}, {currentData.state}
          </h2>
        </div>
        <br />
        <div>
          <h4 className={'currentItem'}>{currentData.desc}</h4>
          <h4 className={'currentItem'}>{currentData.precipitation}</h4>
          <h4 className={'currentItem'}>{currentData.temp}</h4>
        </div>
        <br />
        <div>
          <h4 className={'currentItem'}>{currentData.humidity}</h4>
          <h4 className={'currentItem'}>{currentData.wind}</h4>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Current;

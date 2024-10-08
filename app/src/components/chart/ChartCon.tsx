import { useState, useEffect } from "react";
import { useDataContext } from "../WeatherApp";
import { useStyleContext } from "../Context";
import Chart from "./Chart";
import Buttons from "./Buttons";

const ChartCon = () => {
  const [currentChart, setCurrentData]: any = useState({});
  const data: any = useDataContext();
  const time: any = data.chart.time;
  const chartData: any = data.chart.chart;

  interface chartInterface {
    id: number;
    title: string;
    data: any;
  }

  const search = (key: any) => {
    const charts: chartInterface[] = [
      {
        id: 1,
        title: "Temperature",
        data: chartData.temp,
      },
      {
        id: 2,
        title: "Chance of Precipitation",
        data: chartData.precipitation,
      },
      {
        id: 3,
        title: "Humidity",
        data: chartData.humidity,
      },
    ];
    let object: any = charts.find((obj) => obj.id === key);
    return object.data;
  };

  const temperature: any = () => setCurrentData(search(1));
  const precipitation: any = () => setCurrentData(search(2));
  const humidity: any = () => setCurrentData(search(3));

  useEffect(() => {
    temperature();
  }, [data.chart]);

  return (
    <div className={'chartCon'}>
      <div className={'chart_and_buttons'}>
        <Chart
            className={'chart'}
          time={time}
          title={currentChart.title}
          data={currentChart.data}
        />
        <Buttons
          temperature={temperature}
          precipitation={precipitation}
          humidity={humidity}
        />
      </div>
    </div>
  );
};

export default ChartCon;

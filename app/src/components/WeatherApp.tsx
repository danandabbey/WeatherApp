import { useState, useEffect, createContext, useContext } from "react";
import Current from "./current";
import TwelveHour from "./twelveHours";
import Chart from "./chart/ChartCon";
import fetchData from "../assets/call";
import { useLocationContext, useStyleContext } from "./Context";

const dataContext = createContext({});

function WeatherApp() {
  const mobile: any = window.innerWidth <= 900;
  const location: any = useLocationContext();
  const [data, setData] = useState(undefined);
  const getData = async () => {
    setData(await fetchData(location));
  };
  useEffect(() => {
    location ? getData() : null;
  }, [location]);

  const [mobileChart, setMobileChart] = useState(false);

  return (
    <div className="app">
      {data ? (
        <dataContext.Provider value={data}>
          <Current />
          <Chart />
          <TwelveHour />
        </dataContext.Provider>
      ) : null}
    </div>
  );
}

function useDataContext() {
  const data = useContext(dataContext);
  if (data) {
    return data;
  }
}

export { useDataContext };
export default WeatherApp;

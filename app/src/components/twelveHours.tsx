import { useDataContext } from "./WeatherApp";
import { useStyleContext } from "./Context";

const Forecast = (props: any) => {
  const { data } = props;
  const style: any = useStyleContext();
  const name = data.name;
  const precipitation = `${data.precipitation}% chance`;
  const temp = `${data.temp}\u00b0F`;
  return (
    <div className={'forecast'}>
      <h3 className={'forecast_name'}>{name}</h3>
      <h5 className={'forecast_Item'}>{precipitation}</h5>
      <h5 className={'forecast_Item'}>{temp}</h5>
    </div>
  );
};

const TwelveHour = () => {
  const style: any = useStyleContext();
  const data: any = useDataContext();
  const twelveHourData: any = data.twelveHour;
  const day_time = twelveHourData.filter((obj: any) => obj.isDayTime === true);
  const five = day_time.slice(0, 5);
  return (
    <div className={'twelveHourCon'}>
      <h1 className={'twelveHourTitle'}>Daily Forecast</h1>
      <div className={'twelveHour'}>
        {five.map((obj: any) => {
          return <Forecast key={obj.name} data={obj} />;
        })}
      </div>
    </div>
  );
};

export default TwelveHour;

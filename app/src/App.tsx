import { useStyleContext } from "./components/Context";
import WeatherApp from "./components/WeatherApp";


function App(): JSX.Element {
  const style = useStyleContext();

  return (
    <div className={'app'}>
        <WeatherApp />
    </div>
  );
}

export default App;

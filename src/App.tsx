// import './App.css'
import NavigationBar from "./components/navbar/navigation-bar";
import WeatherOverview from "./components/weather-overview/weather-overview";

const App = () => {

  return (
    <>
      <NavigationBar />
      <WeatherOverview cityName='Sofia' country='Bulgaria' temperature={22} />
    </>
  )
}

export default App;

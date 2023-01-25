import "./App.css";
import Header from "./components/Header";
import DaysList from "./components/DaysList";
import CountryInfo from "./components/CountryInfo";
import InputLocation from "./components/InputLocation";
import lineGraph from "./components/WeatherTable";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";

function App() {
  const [weather, setWeather] = useState(undefined);
  const [country, setCountry] = useState("London");
  const [date, setDate] = useState(3);
  const [hour, setHour] = useState(undefined);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=bfe01f033424446bbae132912232301&q=${country}&days=${date}&aqi=no&alerts=no`
      );
      const json = await res.json();
      setWeather(json);
    };
    getWeather();
  }, [country, date]);

  const onSubmit = (e) => {
    if (e) {
      setCountry(e);
    }
  };

  useEffect(() => {
    const getTableData = async () => {
      const res = await fetch(
        `http://api.weatherapi.com/v1/future.json?key=bfe01f033424446bbae132912232301&q=London&dt=${date}`
      );
      const json = await res.json();
      setHour(json);
      console.log(hour);
    };
    getTableData();
  }, [hour]);

  const handleDate = (e) => {
    if (e.target.value) {
      setDate(e.target.value);
    }
  };

  const handleHour = (e) => {
    console.log(e.target.value);
    // console.log(weather.forecast.forecastday[2]);
    // const name = weather.location.name;
    // const results = weather.forecast.forecastday["INDEX OF BUTTON"].hour.map(
    //   (data) => {
    //     return {
    //       name: name,
    //       hour: data.time,
    //       temp: data.temp_c,
    //     };
    //   }
    // );
    // setHour(results);
    // console.log(results);
  };

  return (
    <div className="App">
      <Header />
      {weather ? (
        <Container maxWidth={false}>
          <InputLocation onSubmit={onSubmit} handleDate={handleDate} />
          <Box display="flex" flexDirection="row" sx={{ m: 3 }}>
            <DaysList weather={weather} handleHour={handleHour} />
            <CountryInfo location={weather.location} />
          </Box>
          {/* {hour ? (
            <Box>
              <lineGraph data={hour} />
            </Box>
          ) : (
            <div></div>
          )} */}
        </Container>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;

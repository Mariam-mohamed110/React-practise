import "./App.css";
import Header from "./components/Header";
import DaysList from "./components/DaysList";
import CountryInfo from "./components/CountryInfo";
import InputLocation from "./components/InputLocation";
import LineGraph from "./components/WeatherTable";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";

function App() {
  const [weather, setWeather] = useState(undefined);
  const [country, setCountry] = useState("London");
  const [days, setDays] = useState(3);
  const [date, setDate] = useState(undefined);
  const [hour, setHour] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=bfe01f033424446bbae132912232301&q=${country}&days=${days}&aqi=no&alerts=no`
      );
      const json = await res.json();
      setWeather(json);
    };
    getWeather();
  }, [country, days, date]);

  const onSubmit = (e) => {
    if (e) {
      setCountry(e);
    }
  };

  const handleDay = (e) => {
    if (e.target.value) {
      setDays(e.target.value);
    }
  };

  const handleHour = (e) => {
    setDate(e);
    console.log(e);
    const findData = weather.forecast.forecastday.find((obj) => {
      return obj.date === e;
    });
    console.log(findData);
    setHour(findData);
  };

  function organisedData() {
    const organisedData = hour.hour.map((data) => {
      return {
        hour: data.time,
        temp: data.temp_c,
      };
    });
    return organisedData;
  }

  return (
    <div className="App">
      <Header />
      {weather ? (
        <Container maxWidth={false}>
          <InputLocation onSubmit={onSubmit} handleDay={handleDay} />
          <Box display="flex" flexDirection="row" sx={{ m: 3 }}>
            <DaysList weather={weather} handleHour={handleHour} />
            <CountryInfo location={weather.location} />
          </Box>
          {date ? (
            <Box>
              <LineGraph hour={organisedData()} />
            </Box>
          ) : (
            <div></div>
          )}
        </Container>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;

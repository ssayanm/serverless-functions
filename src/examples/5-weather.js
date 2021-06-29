import React, { useEffect, useState } from "react";
import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/api/5-weather`;

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const fetchData = async () => {
    try {
      // const { data } = await axios.get("/.netlify/functions/1-hello");
      const { data } = await axios.get(url);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(weather);
  }, [weather]);
  return (
    <section className="section section-center content page-container">
      <form className="form">
        <h3>open weather API</h3>
        <div className="form-control">
          <label htmlFor="search">enter city</label>
          <input type="text" name="search" className="form-input" />
        </div>
        <p className="alert">display alert here</p>
        <button type="submit" className="submit-btn">
          get weather
        </button>
      </form>
      <div className="result"></div>
    </section>
  );
};

export default Weather;

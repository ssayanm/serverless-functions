import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://jolly-bartik-0d83fe.netlify.app/api/1-hello";

const Hello = () => {
  const [prod, setProd] = useState([]);
  const fetchData = async () => {
    try {
      // const { data } = await axios.get("/.netlify/functions/1-hello");
      const { data } = await axios.get(url);
      setProd(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <section className="page-container">First Component</section>;
};

export default Hello;

const result = document.querySelector(".result");

// const fetchData = async () => {
//   try {
//     // const { data } = await axios.get("/.netlify/functions/1-hello");
//     const { data } = await axios.get("/api/1-hello");
//     result.textContent = data;
//   } catch (error) {
//     console.log(error.response.data);
//     result.textContent = error.response.data;
//   }
// };

// fetchData();

import React, { useEffect, useState } from "react";
import axios from "axios";

const url =
  "https://fervent-allen-3324f9.netlify.app/.netlify/functions/1-hello";

const Hello = () => {
  const [prod, setProd] = useState([]);
  const fetchData = async () => {
    try {
      // const { data } = await axios.get("/.netlify/functions/1-hello");
      const { data } = await axios.get(url);
      setProd(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <section className="page-container">
      <h1>first example</h1>
      <h2 class="result">{prod}</h2>
    </section>
  );
};

export default Hello;

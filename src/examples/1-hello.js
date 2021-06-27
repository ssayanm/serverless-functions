import React, { useEffect, useState } from "react";
import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/api/1-hello`;

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
      <h2 className="result">{prod}</h2>
    </section>
  );
};

export default Hello;

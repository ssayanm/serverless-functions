import React, { useEffect, useState } from "react";
import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/api/2-basic-api`;

const BasicAPI = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      // const { data } = await axios.get("/.netlify/functions/1-hello");
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="page-container section section-center">
      <h1>basic API</h1>

      <div className="result">
        {products.map((product) => {
          const {
            id,
            image: { url },
            price,
            name,
          } = product;
          return (
            <article className="product" key={id}>
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BasicAPI;

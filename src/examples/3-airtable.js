import React, { useEffect, useState } from "react";
import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/api/3-z-complete`;

const Airtable = () => {
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
      <h1>Airtable API</h1>

      <div className="result">
        {products.map((product) => {
          const { id, url, price, name } = product;
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

export default Airtable;

// const result = document.querySelector(".result");

// const fetchProducts = async () => {
//   try {
//     // const { data } = await axios.get('/api/3-airtable')
//     const { data } = await axios.get("/api/3-z-complete");
//     const products = data
//       .map((product) => {
//         const { id, url, name, price } = product;
//         return `<a href="product.html?id=${id}" class="product">
//      <img src="${url}" alt="${name}"/>
//      <div class="info">
//      <h5>${name}</h5>
//      <h5 class="price">$${price}</h5>

//      </div>
//      </a>`;
//       })
//       .join("");
//     result.innerHTML = products;
//   } catch (error) {
//     result.innerHTML = "<h4>There was an error</h4>";
//   }
// };
// fetchProducts();

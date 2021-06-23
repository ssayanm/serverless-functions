const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      "https://jolly-bartik-0d83fe.netlify.app/api/2-basic-api"
    );
    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;
        return `   <article class="product">
      <img
        src="${url}"
        alt="utopia sofa"
      />
      <div class="info">
        <h5>"${name}"</h5>
        <h5 class="price">$"${price}"5</h5>
      </div>
    </article> `;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h2>Error</h2>`;
  }
};

fetchData();

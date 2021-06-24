require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_KEY)
  .table("products");

// airtable.list().then((resp) => {
//   console.log(resp);
// });

// airtable
//   .list(
//     {
//       filterByFormula: `NOT({Feature} = '')`, // optional
//       maxRecords: 200, // optional
//       pageSize: 100, // optional
//       sort: [{ field: "name", direction: "asc" }], // optional
//       view: "Airtable View", // optional
//       cellFormat: "json", // optional
//       timeZone, // optional
//       userLocale, // optional
//     },
//     offset //optional
//   )
//   .then((resp) => {
//     console.log(resp);
//   });

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { name, image, price } = product.fields;
      const url = image[0].url;
      return {
        id,
        name,
        url,
        price,
      };
    });
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server error",
    };
  }
};

// domain/.netlify/functions/1-hello
// const user = { name: "sayan", age: 33 };

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "My first Netify function example",
    // body: JSON.stringify(user),
  };
};

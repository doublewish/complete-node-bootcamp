const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res
    .status(200)
    .json({message:"Hello from the server side!", app: "Natours" });
});

app.post('/', (req, res) => {
  return res
    .status(200)
    .send('You can post to this endpoint...');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
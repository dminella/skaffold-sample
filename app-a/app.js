const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');

app.get('/', (req, res) => {
    axios
    .get('http://localhost:3030')
    .then(res => {
      console.log(`StatusCode from B: ${res.status}`);
      console.log(`Response from B: ${res.data}`);
    })
    console.log('Hello World from A!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
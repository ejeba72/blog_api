const express = require('express');
const{ generalRouter } = require('./routes/generalRoute');
const { config } = require('dotenv');

// dotenv config
config();

const PORT = process.env.PORT;

const app = express();

app.use('/', generalRouter)

app.listen(PORT, () => {
  console.log(`App is attentively listening at port ${PORT}.`)
})
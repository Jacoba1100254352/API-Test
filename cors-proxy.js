const express = require('express');
const axios = require('axios');

const app = express();

// const PUBLIC = "https://trefle.io"
const PUBLIC = "https://xkcd.com"
// const PUBLIC = "https://cat-fact.herokuapp.com"

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/proxy/*', async (req, res) => {
    let url = PUBLIC + req.originalUrl.replace("/proxy",'');
    try {
        let response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.json(error);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
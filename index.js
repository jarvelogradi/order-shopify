const config = require("./config");
const express = require('express');
const cors = require('cors');
require('isomorphic-fetch');

const app = express(); 
app.use(cors());
const port = config.PORT;

// Assets to our shop
// https::{clave-api}:{clave-secreta-api}@{url}
const URL_BASE = `https://${config.API_KEY}:${config.API_TOKEN}@${config.SHOP_URL}/`

// Request's order

app.get("/orders", async(req, res) =>{
    const response = await fetch(`${URL_BASE}admin/api/2021-10/orders/count.json?status=any`, {
        method: 'GET'
    })
    let data = await response.json()  

    res.send(data);
})

app.get("/customers", async(req, res) =>{
    const response = await fetch(`${URL_BASE}admin/api/2021-10/customers/count.json`, {
        method: 'GET'
    })
    let data = await response.json()  

    res.send(data);
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () =>{
    console.log('servido está online' + port);
})
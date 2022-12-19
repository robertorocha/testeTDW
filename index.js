const express = require("express"); //require express
const app = express();  //variavel app utilizará express
const port = 4000;

app.get('/', (req, res) => { res.send('Hello World') });

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //express fica à escuta na porta 4000, e quando iniciar envia isto para a consola
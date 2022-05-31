const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/PlantaBaixa.mht')
})

app.listen("8080", () => {
    console.log("porta 8080")
})

function teste(){
    console.log(x);

}

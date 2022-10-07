const express = require("express");
const app = express();


app.listen(3000, () => {
    console.log("Server is listening to port 3000")
})


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req, res) => {
    const nam = req.body.userName;
    console.log(nam);
    res.send(`thank you `)
})
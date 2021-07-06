const express = require('express');

const app = express()

app.get('/', (req, res) =>{
    res.send("<h1>Welcome to SCA Cloud School Application</h1>")
})

app.listen(3000, () =>{
    console.log("Server started on port 3000");
})
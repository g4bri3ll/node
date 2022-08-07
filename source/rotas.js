const express = require('express');
const app = express();

app.use(express.static(__dirname, '/../public'));

app.get("/", function (req, res){
    // console.log(__dirname + '/../html/login.html');
    res.sendFile('C:/_PROJECT/Node/Test - Gabriel/html/login.html');
})

// Fim
app.listen(8081);

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
  });

app.post("/", (req, res) => {

    var firstName = req.body.fName;
    var lastname = req.body.lName;
    var email = req.body.email;
    console.log( firstName, lastname, email );

}
)

app.listen(3000, () => {
    console.log('Example app listening on port 3k')
});



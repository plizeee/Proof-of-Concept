let port = process.env.PORT || 8081;
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/MovieForm.html');
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});

// Trigger the API request when needed
axios.get('http://localhost:8080/getMovies')
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });

let port = process.env.PORT || 8080;
let mongoDB = require('mongodb').MongoClient;
let movieModule = require('./MovieModule.js');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors'); // Import the cors package

app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

// get all movies
app.get('/getMovies', async function(req, res){
    let movies = await movieModule.DisplayMovies(req, mongoDB);
    res.send(movies);
});

app.listen(port);

# Proof-of-Concept

This is a proof-of-concept to demonstrate how to create an API for a MongoDB database using Node.js/Express as well as how to create a simple web application to interact with the API using its endpoint.

## Setup

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Inside MongoDB Compass, import the 'dataset.csv' file into a new database called 'Movies' and a new collection called 'Movie'
4. Make sure you are connected to the newly created database
5. Open two terminals inside the working directory
6. Run the API using 'node API/server.js'
7. Run the web application using 'node Webclient/server.js'
8. Open a browser and go to 'localhost:8081' to access the web application.

## Notes
* It may take a moment for the web application to load the data from the API. Just give it a minute and you'll know it's done when the console prints the data from the API. Once you see that, you can refresh the page and everything should be working.
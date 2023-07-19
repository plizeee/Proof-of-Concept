# Proof-of-Concept

This is a proof-of-concept to demonstrate how to create an API for a MongoDB database using Node.js/Express as well as how to create a simple web application to interact with the API using its endpoint.

## Setup

1. Clone the repository
2. Open two terminals inside and navigate to the API and Webclient folders respectively
3. Run `npm install` in each terminal to install the dependencies for their respective projects
4. Inside MongoDB Compass, create a new database called 'Movies'and a new collection called 'Movie', then import the 'dataset.csv' file into the collection
5. Make sure you are connected to the newly created database and collection in MongoDB Compass
6. Run each `node server.js` in each terminal to start the API and web application
7. Open a browser and go to 'localhost:8081' to access the web application

## Notes
* It may take a moment for the web application to load the data from the API. Just give it a minute and you'll know it's done when the console prints the data from the API. Once you see that, you can refresh the page and everything should be working.
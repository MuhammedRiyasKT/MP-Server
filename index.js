// Import JSON Server
const jsonServer = require('json-server');

// Create a server instance for the media player application
const mpServer = jsonServer.create();

// Create default middleware
const middleware = jsonServer.defaults();

// Set up routes using the specified JSON file
const routes = jsonServer.router('db.json');

// Set the port for running the server app
const PORT = process.env.PORT || 3000;

// Use middleware for handling static files, logging, etc.
mpServer.use(middleware);

// Use the route configuration for serving `db.json`
mpServer.use(routes);

// Start the server and listen for client requests
mpServer.listen(PORT, () => {
  console.log(`Media player server running at port ${PORT} and waiting for client requests`);
});

import express from 'express';
import fetch from 'node-fetch';
import eventbrite_API from './config.js';
console.log("API key: ", eventbrite_API);

const app = express();
const port = 3000;

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'YOUR_OAUTH_TOKEN';

// Example route for fetching user details

// Example route for fetching event details

// Example route for fetching ticket class details

// Example route for fetching order details

// Example route for fetching venue details

// Example route for fetching organizer details

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});


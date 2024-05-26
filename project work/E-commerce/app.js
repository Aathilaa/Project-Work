
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3003;


app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
// Route for the add to cart page
app.get('/addtoCart.html', (req, res) => {
    // You can retrieve product details from req.query if needed
    // For simplicity, let's just send the add to cart page
    res.sendFile(__dirname + '/public/addtoCart.html');
});
// POST endpoint to handle form submission for signin
app.post('/signin', (req, res) => {
    // Process the signin form data here
    // For simplicity, let's just redirect to the add to cart page
    res.redirect('/addtoCart.html');
});

// POST endpoint to handle form submission for signup
app.post('/signup', (req, res) => {
    // Process the signup form data here
    // For simplicity, let's just redirect to the add to cart page
    res.redirect('/addtoCart.html');
});
// Route for the add to cart page
// POST endpoint to handle form submission
app.post('/submit', (req, res) => {
    // Process the form data here
    // For simplicity, we're just redirecting to index.html
    res.redirect('/index.html');
});

// Listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
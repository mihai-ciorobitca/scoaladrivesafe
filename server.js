const express = require('express');
const app = express();

// set view folder
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.send("Running");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
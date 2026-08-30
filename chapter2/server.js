const express = require('express');
const app = express();
const PORT = 8383;

app.use(express.json()); // Middleware to parse JSON request bodies
let data = ['lmao'];

app.get('/', (req, res) => {
    console.log('lmao', req.method);
    res.send('<h1> html code</h1>');
});
app.get('/dashboard', (req, res) =>{
    console.log('dashboard', req.method);
    res.send('<h1>Dashboard</h1>');
});
app.get('/api/data', (req, res) => {
    console.log('for data');
    res.json(data);
});

app.post('/api/data', (req, res) => {
    console.log('post data');
    console.log('Request body:', req.body); // Log the request body to the console
    data.push(req.body);
    res.json({ message: 'Data received successfully' });

});

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));


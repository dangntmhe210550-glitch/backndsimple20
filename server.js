const express = require('express');
const app = express();
const PORT = 8383;
app.get('/', (req, res) => {
    console.log('lmao', req.method);
    res.send('<h1> html code</h1>');
});
app.get('/dashboard', (req, res) =>{
    console.log('dashboard', req.method);
    res.send('<h1>Dashboard</h1>');
});

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));


const express = require('express');
const app = express();
const PORT = 8383;
app.get('/', (req, res) => {
    console.log('lmao', req.method);
    res.sendStatus(200);
});
app.get('/dashboard', (req, res) =>{
    console.log('dashboard', req.method);
    res.send('hi')
})

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));


const express = require('express');
const app = express();
const PORT = 8383;
app.get('/', (req, res) => {
    console.log('lmao', req.method);
    res.sendStatus(200);
});

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));


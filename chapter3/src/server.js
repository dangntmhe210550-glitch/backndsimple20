import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

//lay file name tu url
const __filename = fileURLToPath(import.meta.url);
//lay dirname tu file path
const __dirname = dirname(__filename);

const app = express();
const PORT =process.env.PORT || 3000;

//middleware
app.use(express.static(path.join(__dirname, '../public')))

//dung de gui giao dien html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});

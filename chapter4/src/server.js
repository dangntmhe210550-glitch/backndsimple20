import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

//lay file name tu url
const __filename = fileURLToPath(import.meta.url);
//lay dirname tu file path
const __dirname = dirname(__filename);

const app = express();
const PORT =process.env.PORT || 3000;

//middleware
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

//dung de gui giao dien html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

//Routes
app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
});

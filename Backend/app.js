import express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.use(express.static("./Frontend"));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})
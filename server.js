const express = require("express");
require("./Dbconnection/conn");
const employeeRoute = require("./routes/employeeRoute");
const dotenv = require("dotenv");
dotenv.config()
const app = express()
const cors = require("cors");
app.use(cors({
    orgin: "https://localhost:3000"
}))
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use(employeeRoute);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

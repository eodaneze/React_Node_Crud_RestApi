const express = require('express')
require("./Dbconnection/conn")
const employeeRoute = require("./routes/employeeRoute")
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use(employeeRoute)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
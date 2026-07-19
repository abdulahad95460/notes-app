const express = require("express");
const app = express();

app.use(express.json());

const connectDB = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");

app.use(noteRoutes);

connectDB();

app.listen(3000, () => {
    console.log("Server is running...");
});
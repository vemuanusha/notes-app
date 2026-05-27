const express = require("express");
const path = require("path");
const app = express();
const notesRoutes = require("./routes/notesRoutes");

//Frontend Connection
app.use(express.static(path.join(__dirname,"../frontend")));

//Middleware
app.use(express.json());

//Routes
app.use("/notes",notesRoutes);

app.listen(5000,() =>{
    console.log("Server running on port 5000");
})
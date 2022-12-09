const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

app.get("*/*", (req, res) => {
    console.log("ay")
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log("server started on port 5000");
});
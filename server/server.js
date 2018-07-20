const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

// Tell Express what should be served
app.use(express.static(publicPath));

// To enable that refresh works regardless on which
// page user is on
app.get("*", (request, response) => {
    response.sendFile(path.join(publicPath, "index.html"));
});

// Start server locally on given port: from heroku or locally on 3000
app.listen(port, () => {
    console.log("Server is up!");
});

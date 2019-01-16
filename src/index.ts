import express from "express";
import path from 'path';
const app = express();
const port = 8080; // default port to listen


//Configure express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


//Define route handler for the default homepage
app.get("/", (req, res) => {
    res.send("Hello World!");
});


//Start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App server starting at http://localhost:${port}`);
});

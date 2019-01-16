import express from "express";
const app = express();
const port = 8080; // default port to listen

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App server starting at http://localhost:${port}`);
});

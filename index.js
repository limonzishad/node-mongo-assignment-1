const express = require("express");
const app = express();
const port = 5000;

const userRoutes = require("./routes/user.route");

app.use(express.json());

app.use("/user", userRoutes);

app.all("*", (req, res) => {
    res.send("no route found.");
});

app.listen(port, () => {
    console.log(port);
});
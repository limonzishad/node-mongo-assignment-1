const users = require("../utilities/userData.json");

module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query;
    res.send(users.slice(0, limit));
};

module.exports.getRandomUser = (req, res) => {

};

module.exports.postUser = (req, res) => {
    users.push(req.body);
    res.send(users);
};

module.exports.patchUser = (req, res) => {
    res.send("all user found.");
};

module.exports.patchBulkUser = (req, res) => {
    res.send("all user found.");
};

module.exports.deleteUser = (req, res) => {
    res.send("all user found.");
};
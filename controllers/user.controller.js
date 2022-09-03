const users = [
    {
        "id": 1,
        "gender": "male",
        "name": "Luffy",
        "contact": 123456789,
        "address": "101/A, CD, EF",
        "photoURL": "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png"
    },
    {
        "id": 2,
        "gender": "female",
        "name": "Nami",
        "contact": 213456789,
        "address": "102/B, GH, EF",
        "photoURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO-twChKTxu7ZNEYI00dH7nv7nOH-8lOcag&usqp=CAU"
    },
    {
        "id": 3,
        "gender": "male",
        "name": "Zoro",
        "contact": 312456789,
        "address": "103/C, IJ, EF",
        "photoURL": "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png"
    },
    {
        "id": 4,
        "gender": "female",
        "name": "Robin",
        "contact": 412356789,
        "address": "104/D, KL, EF",
        "photoURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO-twChKTxu7ZNEYI00dH7nv7nOH-8lOcag&usqp=CAU"
    }
];

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
    const { id } = req.params;
    const filter = { _id: id };
    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoURL = req.body.photoURL;
    res.send(newData);
};

module.exports.patchBulkUser = (req, res) => {

};

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    users = users.filter(user => user.id !== Number(id));
    res.send(users);
};
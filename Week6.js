const express = require("express");

const app = express();

const PORT = 3000;


// Middleware to parse JSON data
app.use(express.json());


function requestLogger(req, res, next) {

    console.log(
        `${new Date().toLocaleString()} - ${req.method} ${req.url}`
    );

    next();
}

app.use(requestLogger);


let users = [
    {
        id: 1,
        name: "Ravi",
        age: 21
    },
    {
        id: 2,
        name: "Sita",
        age: 22
    }
];


app.get("/users", (req, res) => {

    res.status(200).json({
        success: true,
        users: users
    });

});


app.get("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {

        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    }

    res.status(200).json({
        success: true,
        user: user
    });

});



app.post("/users", (req, res) => {

    const { name, age } = req.body;

    // Check whether data was received
    if (!name || !age) {

        return res.status(400).json({
            success: false,
            message: "Name and age are required"
        });

    }

    const newUser = {
        id: users.length + 1,
        name: name,
        age: age
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser
    });

});


app.put("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {

        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    }

    const { name, age } = req.body;

    if (!name || !age) {

        return res.status(400).json({
            success: false,
            message: "Name and age are required"
        });

    }

    user.name = name;
    user.age = age;

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: user
    });

});


app.delete("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {

        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    }

    users = users.filter(user => user.id !== id);

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });

});


app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});



app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});

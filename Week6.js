const express = require("express");

const app = express();

const PORT = 3000;


// =====================================================
// 1. BUILT-IN MIDDLEWARE
// =====================================================

// Middleware to parse JSON data
app.use(express.json());


// =====================================================
// 2. CUSTOM MIDDLEWARE - REQUEST LOGGER
// =====================================================

function requestLogger(req, res, next) {

    console.log(
        `${new Date().toLocaleString()} - ${req.method} ${req.url}`
    );

    next();
}

app.use(requestLogger);


// =====================================================
// 3. SAMPLE DATA
// =====================================================

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


// =====================================================
// 4. GET - GET ALL USERS
// =====================================================

app.get("/users", (req, res) => {

    res.status(200).json({
        success: true,
        users: users
    });

});


// =====================================================
// 5. GET - GET A SINGLE USER
// =====================================================

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


// =====================================================
// 6. POST - CREATE A NEW USER
// =====================================================

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


// =====================================================
// 7. PUT - UPDATE A USER
// =====================================================

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


// =====================================================
// 8. DELETE - DELETE A USER
// =====================================================

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


// =====================================================
// 9. INVALID ROUTE HANDLER
// =====================================================

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});


// =====================================================
// 10. START SERVER
// =====================================================

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});

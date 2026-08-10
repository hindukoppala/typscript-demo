const express = require("express");

const app = express();

const PORT = 3000;

// Faculty object
const faculty = {
    id: 101,
    name: "Dr. Anitha",
    department: "CSE",
    designation: "Professor",
    experience: 12
};

// 1. Basic route
app.get("/", (req, res) => {
    res.send("Welcome to Faculty Management Server");
});

// 2. Faculty details
app.get("/faculty", (req, res) => {
    res.json(faculty);
});

// 3. Route parameter
app.get("/faculty/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Faculty ID: ${id}`);
});

// 4. Query parameter
app.get("/search", (req, res) => {
    const name = req.query.name;

    res.send(`Searching for faculty: ${name}`);
});

// 5. Multiple query parameters
app.get("/filter", (req, res) => {
    const department = req.query.department;
    const designation = req.query.designation;

    res.send(
        `Department: ${department}, Designation: ${designation}`
    );
});

// 6. Dynamic URL handling
app.get("/faculty/:department/:id", (req, res) => {
    const department = req.params.department;
    const id = req.params.id;

    res.json({
        department: department,
        facultyId: id,
        message: "Faculty details retrieved successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
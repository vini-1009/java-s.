const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const FILE_PATH = '/tasks.json';

function readTasks() {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, "[]");
    }
    return JSON.parse(fs.readFileSync(FILE_PATH));
    }

function writeTasks(tasks) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));

    }

    app.get("/tasks", (req, res) => {
        res.json(readTasks());
        
    });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// RESTful API - Roll Dice
app.get('/api/roll', (req, res) => {
    const sides = parseInt(req.query.sides) || 6;
    const rolls = parseInt(req.query.rolls) || 1;
    let results = [];

    for (let i = 0; i < rolls; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }

    res.json({ sides, rolls, results });
});

// Basic test route
app.get('/', (req, res) => {
    res.send('Dice Roller API is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

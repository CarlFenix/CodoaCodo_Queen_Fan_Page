const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let users = {}; // Simulación de base de datos en memoria

// Middleware para parsear JSON
app.use(bodyParser.json());

// Registro de usuarios
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing username or password' });
    }
    if (users[username]) {
        return res.status(400).json({ error: 'User already exists' });
    }
    users[username] = password;
    res.status(201).json({ message: 'User registered successfully' });
});

// Inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing username or password' });
    }
    if (users[username] && users[username] === password) {
        res.status(200).json({ message: 'Login successful', token: 'dummy_token' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});

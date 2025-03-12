require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const audioRoutes = require('./routes/audioRoutes');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

// Middleware para verificar el AUTH_TOKEN
app.use((req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó el token de autenticación' });
    }

    if (token !== `Bearer ${process.env.AUTH_TOKEN}`) {
        return res.status(403).json({ error: 'Token de autenticación inválido' });
    }

    next(); // Continúa si el token es correcto
});

// Rutas
app.use('/api/audio', audioRoutes);

module.exports = app;
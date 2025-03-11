const fs = require('fs');
const path = require('path');
const { TEMP_FOLDER } = require('../config');

// Crear carpeta temporal si no existe
if (!fs.existsSync(TEMP_FOLDER)) {
    fs.mkdirSync(TEMP_FOLDER);
}

// Guardar archivo temporal en una carpeta única
exports.saveTempFile = async (buffer) => {
    const timestamp = Date.now();
    const folderPath = path.join(TEMP_FOLDER, timestamp.toString());

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, 'audio.ogg');
    fs.writeFileSync(filePath, buffer);

    return filePath;
};

// Eliminar carpeta temporal
exports.deleteTempFile = async (filePath) => {
    const folderPath = path.dirname(filePath);

    if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true });
    }
};

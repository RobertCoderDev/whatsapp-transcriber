const { OpenAI } = require('openai');
const fs = require('fs');
const { OPENAI_API_KEY } = require('../config');

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

exports.transcribeAudio = async (filePath) => {
    console.log(`🟡  Iniciando transcripción del archivo: ${filePath}`);

    try {
        const response = await openai.audio.transcriptions.create({
            file: fs.createReadStream(filePath),
            model: 'whisper-1',
            language: 'es'
        });

        console.log(`🟢  Transcripción completada para el archivo: ${filePath}`);
        return response.text;

    } catch (error) {
        console.error(`🔴 [ERROR] Error durante la transcripción del archivo: ${filePath}`);
        console.error(error);
        throw error;  // Para que el error se maneje en el flujo principal
    }
};
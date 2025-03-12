const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const { transcribeAudio } = require('./transcriptionService');
const { saveTempFile, deleteTempFile } = require('./fileService');
const path = require('path');

exports.processAudio = async (req, res) => {
    console.log('🛫  Proceso de audio iniciado...');

    try {
        const { mediaKey, fileEncSha256, directPath, mimetype } = req.body;

        const fullUrl = `https://mmg.whatsapp.net${directPath}`;
        console.log(`🔗  Descargando audio desde: ${fullUrl}`);

        const stream = await downloadContentFromMessage(
            { url: fullUrl, mediaKey },
            'audio'
        );

        const chunks = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const decryptedAudio = Buffer.concat(chunks);

        if (!decryptedAudio) {
            console.error('🔴 [ERROR] Error en la desencriptación del audio.');
            return res.status(400).json({ error: 'Error en la desencriptación del audio.' });
        }

        // Guardar archivo temporal
        const tempFilePath = await saveTempFile(decryptedAudio);
        console.log(`📂  Archivo temporal guardado en: ${tempFilePath}`);

        // Proceso de transcripción
        const text = await transcribeAudio(tempFilePath);

        // Eliminar archivo temporal
        await deleteTempFile(tempFilePath);
        console.log(`🗑️  Archivo temporal eliminado: ${tempFilePath}`);

        res.json({ text });

    } catch (error) {
        console.error(`🔴 [ERROR] Error durante el proceso de audio: ${error.message}`);
        res.status(500).json({ error: 'Error procesando el audio' });
    }
};
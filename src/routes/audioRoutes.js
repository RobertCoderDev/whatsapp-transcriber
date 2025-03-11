const express = require('express');
const multer = require('multer');
const { processAudio } = require('../services/audioService');

const router = express.Router();
const upload = multer();

router.post('/process', upload.single('audio'), processAudio);

module.exports = router;
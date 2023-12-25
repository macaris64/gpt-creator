import express from 'express';
const router = express.Router();

import * as gptController from '../controllers/gpt.controller';

router.post('/gpt', gptController.createGpt);

router.post('/send', gptController.send);

export default router;

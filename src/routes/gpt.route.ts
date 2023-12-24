import express from 'express';
const router = express.Router();

import * as gptController from '../controllers/gpt.controller';

router.post('/gpt', gptController.createGpt);
router.put('/gpt/:id', gptController.updateGpt);
router.get('/gpt/:id', gptController.getGptById);
router.get('/gpt', gptController.getAllGpts);
router.delete('/gpt/:id', gptController.deleteGpt);

export default router;

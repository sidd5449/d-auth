import express from 'express';
import { pinController } from '../controllers/pinController.js';


const router = express.Router();
router.patch('/', pinController);

export default router;
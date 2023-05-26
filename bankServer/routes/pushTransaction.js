import express from 'express';
import { transactionController } from '../controllers/transactionController.js';


const router = express.Router();
router.post('/', transactionController);

export default router;
import { Router } from 'express';
import { addNewWord, getAll, searchWord } from '../controllers/wordController.js';
import apiKeyMiddleware from '../middlewares/apiKeyMiddleware.js';

const wordRouter = Router();

wordRouter.post('/add-word', apiKeyMiddleware, addNewWord);
wordRouter.get('/search', searchWord); // Ensure this endpoint is correct
wordRouter.get('/', getAll);

export default wordRouter;

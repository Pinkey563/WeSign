import { Router } from 'express';
import { getClassList, getOptions } from '../controllers/classController.js';

const classRouter = Router();

classRouter.get('/', getClassList);
classRouter.get('/options', getOptions);

export default classRouter;

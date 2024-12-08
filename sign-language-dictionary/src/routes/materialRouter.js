import { Router } from 'express';
import { getMaterialListByTopic } from '../controllers/materialController.js';

const materialRouter = Router();

materialRouter.get('/', getMaterialListByTopic);

export default materialRouter;

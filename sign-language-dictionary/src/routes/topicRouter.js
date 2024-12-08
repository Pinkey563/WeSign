import { Router } from 'express';
import { getTopicListByClassCode } from '../controllers/topicController.js';

const topicRouter = Router();

topicRouter.get('/', getTopicListByClassCode); // Ensure this endpoint is correct

export default topicRouter;

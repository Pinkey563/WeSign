import topicRepository from '../repositories/topicRepository.js';

export const getTopicListByClassCode = async (req, res) => {
  const { classCode, subject} = req.query;
  try {
    const topics = await topicRepository.getTopicsByClassAndSubject(classCode, subject);
    res.json(topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).send('Internal Server Error');
  }
};



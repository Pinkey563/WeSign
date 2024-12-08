import materialRepository from '../repositories/materialRepository.js';

export const getMaterialListByTopic = async (req, res) => {
  const { topicId } = req.query;
  
  if (!topicId) {
    return res.status(400).send('Missing topicId parameter');
  }

  try {
    const materials = await materialRepository.getMaterialsByTopicId(topicId);
    res.json(materials);
  } catch (error) {
    console.error('Error fetching materials:', error);
    res.status(500).send('Internal Server Error');
  }
};

import classRepository from '../repositories/classRepository.js';

export const getClassList = async (req, res) => {
  const { searchType, searchValue } = req.query;
  try {
    const classes = await classRepository.getClasses(searchType, searchValue);
    res.json(classes);
  } catch (error) {
    console.error('Error fetching class list:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const getOptions = async (req, res) => {
  const { searchType } = req.query;
  try {
    const options = await classRepository.getOptions(searchType);
    res.json(options);
  } catch (error) {
    console.error('Error fetching options:', error);
    res.status(500).send('Internal Server Error');
  }
};

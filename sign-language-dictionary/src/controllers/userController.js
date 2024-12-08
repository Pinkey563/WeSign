import userRepository from '../repositories/userRepository.js';

export const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();
  res.status(200).json(users);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userRepository.deleteUserById(id);
  res.status(204).send();
};

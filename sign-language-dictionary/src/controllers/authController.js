import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';
import dotenv from "dotenv"

dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUND, 10)

export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(saltRounds); // Generate the salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt
    const user = await userRepository.createUser(username, hashedPassword);
    res.redirect('/login');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userRepository.findUserByUsername(username);
    
    if (user && await bcrypt.compare(password, user.password)) {
      // Redirect to the desired page after successful login
      res.redirect('/dictionary'); // Change this to the desired page
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
};
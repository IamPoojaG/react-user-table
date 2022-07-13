import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
} from '../Controller/userController.js';
const router = express.Router();

router.post('/add', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

export default router;

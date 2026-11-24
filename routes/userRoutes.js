

import * as userController  from '../controllers/userController.js';

import express from "express";

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/userById', userController.UserById);
router.post('/create', userController.createUser);
router.get('/userByEmail', userController.getUserByEmail);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

export default router;
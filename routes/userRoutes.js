

import * as userController  from '../controllers/userController.js';

import express from "express";

const router = express.Router();

router.get('/users', userController.getAllUsers);

export default router;
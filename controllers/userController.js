import db from "../config/db.js";
import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error("une erreur est survenue", error);
    res.status(500).json("Une erreur est survenue");
  }
};

// Reste CRUD à faire ici + les autres pages - getAllUsers testé et ok

// Finir CRUD, commencer README et Sécuriser (bcrypt JWT et autres (cors ?)) 
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error("une erreur est survenue", error);
    res.status(500).json("Une erreur est survenue");
  }
};

export const UserById = async (req, res) => {
  const id = req.params.id;
  try {
    const userById = await User.findByPk(id);
    res.status(200).json(userById); // ok
  } catch (error) {
    console.error("une erreur est survenue", error);
    res.status(500).json("Une erreur est survenue");
  }
};

export const getUserByEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const UserByEmail = await User.findOne({ where: { email } });
    if (UserByEmail === null) {
      return res.status(404).json({
        message: "Mail non reconnu",
      });
    } else {
      return res.status(200).json({
        message: "Utilisateur trouvé",
        user: UserByEmail,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const mdpHash = bcrypt.hashSync(password, 10);
    const createdUser = await User.create({
      username,
      password: mdpHash,
      email,
    });
    res.status(201).json({ message: "Utilisateur créé", createdUser }); // ok
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const updateUser = async (req, res) => {
  const { username, password, email } = req.body;
  const id = req.params.id;

  try {
    const UserFind = await User.findByPk(id);

    if (!UserFind) {
      res.status(404).json({ message: "utilisateur inconnu" });
    } else {
      const mdpHash = bcrypt.hashSync(password, 10);
      const updatedUser = await UserFind.update({username, password: mdpHash, email});
      res.status(200).json({ message: "utilisateur modifié", updatedUser });
    }
  } catch (error) {
    res.status(500);
    console.error(error);
  }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const UserFind = await User.findByPk(id);
        if (!UserFind) {
              res.status(404).json({message: "utilisateur inconnu"});
        } else {
            const deletedUser = UserFind.destroy(id);
                res.status(200).json({message: "utilisateur supprimé", deletedUser});
        }
    } catch (error) {
        
    }
}

// CRUD fait sur User. Prochaine étape = Task
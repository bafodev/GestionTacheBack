import { DataTypes } from "sequelize";

import db from "../config/db.js";

const Comment = db.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Comment;
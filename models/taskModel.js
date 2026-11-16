import { DataTypes } from "sequelize";

import db from '../config/db.js'; 

const Task = db.define ('Task', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
        },

        dueDate: {
            type: DataTypes.DATE,
        },

        ownerId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            
        }

    }
)

export default Task;
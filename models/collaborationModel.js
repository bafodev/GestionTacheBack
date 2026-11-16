import { DataTypes } from "sequelize";

import db from '../config/db.js';

const Collaboration = db.define ('Collaboration',
{
    taskId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },

    userId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
    }
}
)

export default Collaboration; 
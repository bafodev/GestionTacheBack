import db from '../config/db.js';

import Task from './TaskModel.js';
import User from './UserModel.js';
import Collaboration from './collaborationModel.js';
import Comment from './commentModel.js';

User.hasMany(Task, {foreignKey: 'ownerId'});
Task.belongsTo(User, {foreignKey: 'ownerId'});

Comment.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Comment, {foreignKey: 'userId'});

Comment.belongsTo(Task, {foreignKey: 'taskId'});
Task.hasMany(Comment, {foreignKey: 'taskId'});

Collaboration.belongsTo(User, {foreignKey: 'userId'});
Collaboration.belongsTo(Task, {foreignKey: 'taskId'});

Task.hasMany(Collaboration, {foreignKey: 'taskId'});
User.hasMany(Collaboration, {foreignKey: 'userId'});

export {
    db, 
    Task,
    User, 
    Comment, 
    Collaboration
}
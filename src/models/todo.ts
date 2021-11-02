import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface TodoInstance extends Model {
    id: number;
    title: string;
    done: number;
}
export const Todo = sequelize.define<TodoInstance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        unique: true
    },
    done: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
}, {
    tableName: 'todos',
    timestamps: false
});
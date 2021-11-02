import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_DB as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
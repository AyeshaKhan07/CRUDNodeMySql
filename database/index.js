import mysql from 'mysql'
import { databaseConfig } from './config.js';

export const connectDB =  mysql.createConnection(databaseConfig);
import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});

export const checkDatabaseConnection = async () => {
    try {
        await pool.query("SELECT 1");
        console.log("Connected to MySQL database");
    } catch (err) {
        console.error("Error connecting to MySQL:", err);
        process.exit(1);
    }
};

export default pool;

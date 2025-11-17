import pool from "../config/db.js";

export default {
    async findByUsername(username) {
        const [rows] = await pool.query(
            "SELECT * FROM users WHERE username = ? LIMIT 1",
            [username]
        );
        return rows[0];
    },

    async createUser({ username, password, isAdmin }) {
        const sql = `INSERT INTO users (username, password, is_admin) VALUES (?, ? , ?)`;
        const [result] = await pool.query(sql, [username, password, isAdmin]);
        return result.insertId;
    }
};
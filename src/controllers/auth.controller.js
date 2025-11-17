import Auth from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
    async register(req, res) {
        try {
            const { username, password, isAdmin } = req.body;

            const existing = await Auth.findByUsername(username);
            if (existing) {
                return res.status(400).json({ error: "Username already exists" });
            }

            const hash = await bcrypt.hash(password, 10);
            await Auth.createUser({ username, password: hash, isAdmin });

            res.json({ message: "Register success" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;

            const user = await Auth.findByUsername(username);
            if (!user) return res.status(400).json({ error: "User not found" });

            const match = await bcrypt.compare(password, user.password);
            if (!match) return res.status(400).json({ error: "Invalid password" });

            const token = jwt.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            res.json({
                message: "Login success",
                token,
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

import { Router } from 'express';
import authRoutes from './auth.route.js';
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.use("/auth", authRoutes);

// router.use("/auth", authMiddleware, authRoutes);


export default router;

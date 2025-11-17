import { Router } from 'express';
import authRoutes from './auth.route.js';
import productRoutes from './product.route.js';
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/product", authMiddleware, productRoutes);



export default router;

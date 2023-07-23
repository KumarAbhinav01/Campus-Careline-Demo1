import express from 'express';
import authRoutes from './authRoutes.js'
import userRoutes from './userRoutes.js'
import issueRoutes from './issueRoutes.js'
import adminRoutes from './adminRoutes.js'
import staffRoutes from './staffRoutes.js'

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/issues", issueRoutes);
router.use("/admin", adminRoutes);
router.use("/staff", staffRoutes);

export default router;
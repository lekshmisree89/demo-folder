import { Router } from "express";
import apiRoutes from "./api/index.js";

const router = Router();

router.use("/api", apiRoutes);
router.use("/auth", apiRoutes);

export default router;

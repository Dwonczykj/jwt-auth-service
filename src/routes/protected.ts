import express from "express";
import { authGuard } from "../middleware/authGuard";
const router = express.Router();

router.get("/profile", authGuard, (req, res) => {
    const user = (req as any).user;
    res.json({
        message: "Profile fetched successfully on protected route",
        user
    });
    return;
});

export default router;
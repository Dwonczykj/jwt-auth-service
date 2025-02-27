import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authGuard = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader?.startsWith("Bearer ")) {
        res.status(401).json({ message: "Unauthorised" });
        return;
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
        res.status(401).json({ message: "Invalid or expired token" });
        return;
    }

    (req as any).user = decodedToken;
    next();
}
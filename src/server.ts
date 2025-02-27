import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import protectedRoutes from "./routes/protected";
// import cookieParser from "cookie-parser";
// import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 5000;
let server: any; // Declare server variable

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Function to close server (used for testing)
const closeServer = () => {
    if (server) {
        server.close(() => {
            console.log("Server closed");
        });
    }
};

export { app, closeServer };
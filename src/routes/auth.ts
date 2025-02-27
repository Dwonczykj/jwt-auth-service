import express from "express";
import { createToken, jwtDocumentationHTML, mermaidDiagramsHTML } from "../utils/jwt";

const router = express.Router();

const users = [
    {
        id: 1,
        username: "dummy",
        password: "pass1",
        role: "test_user"
    },
    {
        id: 2,
        username: "test",
        password: "pass2",
        role: "test_user"
    }
]
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Only for DEV, dont include Username / Password in message info on failures.
    if (!username) {
        res.status(400).json({ message: "Username is required" });
        return;
    } else if (!password) {
        res.status(400).json({ message: "Password is required" });
        return;
    }

    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }

    const token = createToken({ username });

    res.json({ token });
    return;
});

router.get("/documentation", (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>JWT Documentation</title>
        </head>
        <body>
            <h1>JWT Documentation</h1>
            <div>${jwtDocumentationHTML()}</div>
            <div>${mermaidDiagramsHTML.jwtAlgorithms.HS256.diagram}</div>
            <div>${mermaidDiagramsHTML.jwtAlgorithms.RS256.diagram}</div>
            <div>${mermaidDiagramsHTML.jwtAlgorithms.ES256.diagram}</div>
        </body>
    </html>
    `;

    res.send(html);
    return;
});

export default router;

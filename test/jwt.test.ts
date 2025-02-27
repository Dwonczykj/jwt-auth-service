import { createToken, verifyToken } from "../src/utils/jwt";

describe("JWT Utility Functions", () => {
    it("should create a token", () => {
        const payload = { username: "test", password: "pass2" }
        const token = createToken(payload);
        expect(token).toBeDefined();
        expect(typeof token).toBe("string");
    });

    it("should verify a token", () => {
        const payload = { username: "test", password: "pass2" }
        const token = createToken(payload);
        const decoded = verifyToken(token);
        expect(decoded).toHaveProperty("username", "test");
    });

    it("should return null for an invalid token", () => {
        expect(() => verifyToken("invalidPayload")).toThrow("Invalid token");
    });
})
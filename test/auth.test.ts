import request from "supertest";
import { app } from "../src/server";
import { createToken } from "../src/utils/jwt";

describe("Auth Routes", () => {
  it("should return a token on login", async () => {
    const response = await request(app).post("/api/auth/login").send({
      username: "dummy",
      password: "pass1"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should block unauthorized access to protected routes", async () => {
    const response = await request(app).get("/api/protected/profile");
    expect(response.status).toBe(401);
  });

  it("should allow access with a valid token", async () => {
    const token = createToken({ username: "test", password: "pass2" });

    const response = await request(app)
      .get("/api/protected/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
  });
});
import { closeServer } from "../src/server";

afterAll((done) => {
    closeServer();
    done();
});
import request from "supertest";
import { app } from "../app";

import createConnection from "../database";
import { Response } from 'express';

describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });
    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys")
            .send({
                title: "Titulo de exemplo",
                description: "Descrição"
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });
    it("Should be able get all survey", async () => {
        await request(app).post("/surveys")
            .send({
                title: "Titulo de exemplo2",
                description: "Descrição2"
            });

        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);
    });
})
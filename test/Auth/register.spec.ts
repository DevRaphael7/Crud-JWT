import { User } from '../../controllers/interfaces/auth-user.model';
import { Auth } from '@controllers/authController';
import request from "supertest";
import { app } from 'serve';

describe("Test in userController (loginUser)", () => {
    let auth: Auth;

    beforeEach( async () => {
        auth = new Auth();
    })

    it('should appear "Valores inválidos" (registerUser)', async () => {
        await request(app)
            .post("/auth/registerUser")
            .send({} as User)
            .expect(400, auth.apiResponse(400, "Valores inválidos"))
            .expect('Content-Type', /json/)
    });

    it('should appear "Usuário já cadastrado" (registerUser)', async () => {
        await request(app)
            .post("/auth/registerUser")
            .send({
                confirmPassword: '123',
                password: '123',
                email: 'raphael@email.com',
                name: 'raphael'
            } as User)
            .expect(200, auth.apiResponse(400, "Usuário já cadastrado"))
            .expect('Content-Type', /json/)
    });

    it('should appear "Usuário já cadastrado" (registerUser)', async () => {
        await request(app)
            .post("/auth/registerUser")
            .send({
                confirmPassword: '123',
                password: '123',
                email: 'raphaelRamalho@email.com',
                name: 'raphael r.'
            } as User)
            .expect(200, auth.apiResponse(200, "Usuário adicionado com sucesso"))
            .expect('Content-Type', /json/)
    })
})
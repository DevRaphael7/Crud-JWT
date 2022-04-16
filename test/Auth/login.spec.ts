import { User } from '../../controllers/interfaces/auth-user.model';
import { Auth } from '@controllers/authController';
import request from "supertest";
import { app } from 'serve';

describe("Test in userController (loginUser)", () => {
    let auth: Auth;

    beforeEach( async () => {
        auth = new Auth();
    })

    it('should appear "Valores inválidos"', async () => {
        await request(app)
            .post("/auth/getUser")
            .send({} as User)
            .expect(400, auth.apiResponse(400, "Valores inválidos"))
            .expect('Content-Type', /json/)
    })

    it('should appear "Senha e confirmar senha diferentes"', async () => {
        await request(app)
            .post("/auth/getUser")
            .send({
                confirmPassword: '231',
                email: 'raphael@email.com',
                name: 'rapha',
                password: '369'
            } as User)
            .expect(400, auth.apiResponse(400, "Senha e confirmar senha diferentes"))
            .expect('Content-Type', /json/)
    })

    it('should appear "Usuário encontrado"', async () => {
        let bodyRequest = {
            confirmPassword: '123',
            password: '123',
            email: 'raphael@email.com',
            name: 'raphael'
        } as User

        await request(app)
            .post("/auth/getUser")
            .send(bodyRequest)
            .expect(200, auth.apiResponse(200, "Usuário encontrado", bodyRequest))
            .expect('Content-Type', /json/)
    })

    it('Token is valid or no', () => {

    })
})
import { Task } from '@interfaces/tasks.model';
import { BackendRequest } from '@interfaces/backendRequest.mode';
import { Auth } from '@controllers/authController';
import { app } from 'serve';
import request from "supertest";

describe('Test in tasksController (createTask)', () => {

    let auth: Auth;
    
    beforeAll(() => {
        auth = new Auth();
    })

    it('should appear "Valores inválidos" (createTask)', async () => {

        const bodyRequest = {
            user: {
                name: 'Raphael',
                email: 'raphael@email.com'
            }
        }

        await request(app)
            .post("/tasks/createTask")
            .send(bodyRequest)
            .expect(400, auth.apiResponse(400, "Corpo de requisição inválido"))
            .expect('Content-Type', /json/)
    })

    it('should appear "Usuário não informado" (createTask)', async () => {

        const bodyRequest: BackendRequest<Task> = {
            user: {
                name: '',
                email: ''
            },
            value: {
                date: '2020-10-06',
                description: 'Teste unitário',
                hourCreate: '12:30:20',
                name: 'Fazer testes unitários',
                userId: 13,
                id: '10'
            }
        }

        expect(bodyRequest.user.name).toEqual('')
        expect(bodyRequest.user.email).toEqual('')

        await request(app)
            .post("/tasks/createTask")
            .send(bodyRequest)
            .expect(400, auth.apiResponse(400, "Usuário não informado"))
            .expect('Content-Type', /json/)
    })

    it('should appear "Tarefa inválida ou não informada" (createTask)', async () => {
        await request(app)
            .post("/tasks/createTask")
            .send({
                user: {
                    name: 'raphael@email.com',
                    email: '123'
                },
                value: {
                    description: '',
                    hourCreate: '12:30:20',
                    name: '',
                    userId: 13
                }
            } as BackendRequest<Task>)
            .expect(400, auth.apiResponse(400, "Tarefa inválida ou não informada"))
            .expect('Content-Type', /json/)
            .send({
                user: {
                    name: 'raphael@email.com',
                    email: '123'
                },
                value: {
                    date: '2020',
                    description: '',
                    hourCreate: '12:30:20',
                    name: 'Fazer testes unitários',
                    userId: 0,
                    id: ''
                }
            } as BackendRequest<Task>)
            .expect(400, auth.apiResponse(400, "Tarefa inválida ou não informada"))
            .expect('Content-Type', /json/)
    })

    it('Validate Token is working', async () => {
        await request(app)
            .post("/tasks/createTask")
            .set('Authorization', 'Bearer ' + 'Token inválido')
            .send({
                user: {
                    name: 'Raphael Ramalho dos Santos',
                    email: 'raphael@email.com'
                },
                value: {
                    date: '2020-10-06',
                    description: 'Teste unitário',
                    hourCreate: '12:30:20',
                    name: 'Fazer testes unitários',
                    userId: 13,
                    id: '10'
                }
            } as BackendRequest<Task>)
            .expect(400, auth.apiResponse(400, "Usuário inválido ou não autorizado"))
            .expect('Content-Type', /json/)
    })
})
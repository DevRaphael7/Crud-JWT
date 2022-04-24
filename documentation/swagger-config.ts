import { paths } from './paths';
import { getUserRequest, getUser200Response } from './components/getUser.component';
import { registerUser200Response } from './components/registerUser.component';
import { createTask } from './components/createTask.component';

export const swagger_options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CRUD JWT Api with Node.js",
            version: "0.1.0",
            description:
            "Esta é uma simples API para realizar crud e validação de TOKEN com JWT",
            contact: {
            name: "DevRaphael7",
            email: ""
            },
        },
        servers: [
            {
                "url": "http://localhost:4001",
                "description": "Local server API"
            }
        ],
        paths: paths,
        components: {
            schemas: {
                "GETUSER": {
                    getUserReq: getUserRequest,
                    getUser200Response: getUser200Response
                },
                "REGISTERUSER": {
                    registerUser200Response: registerUser200Response
                },
                "CREATETASKS": {
                    createTaskReq: createTask
                }
            }
        }
    },
    apis: [
        "../routes/auth/auth.ts",
        "../routes/tasks/tasks.ts"
    ],
};
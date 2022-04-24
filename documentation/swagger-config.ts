import { paths } from './paths';
import { getUserRequest, getUserReqExample } from './components/getUser.component';

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
                getUserReq: getUserRequest,
                getUserReqExample: getUserReqExample
            }
        }
    },
    apis: [
        "../routes/auth/auth.ts",
        "../routes/tasks/tasks.ts"
    ],
};
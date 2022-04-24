import { swagger_options } from '@documentation/swagger-config';
import express, { Express } from 'express';
import SwaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import 'dotenv/config'

import auth from '@routes/auth/auth'
import tasks from '@routes/tasks/tasks';

export const app: Express = express();

const { PORT } = process.env;

//Swagger documentation
const specs = swaggerJsdoc(swagger_options);
app.use('/swagger', SwaggerUi.serve, SwaggerUi.setup(specs, { explorer: true }))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", auth)
app.use('/tasks', tasks)

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))
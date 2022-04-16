import express, { Express } from 'express';
import 'dotenv/config'

import auth from '@routes/auth/auth'
import tasks from '@routes/tasks/tasks';

export const app: Express = express();

const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", auth)
app.use('/tasks', tasks)

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))
import { User } from '@interfaces/auth-user.model';
import { Query } from './../services/query.service';
import { Task } from './interfaces/tasks.model';
import { ControllerHttp } from './controllerHttp';
import { BackendRequest } from '@interfaces/backendRequest.mode'
import { Request, Response } from "express";



export class TaskController extends ControllerHttp {

    private query: Query

    constructor(){
        super();
        this.query = new Query();
    }

    public createTask = async (req: Request, res: Response) => {
        try{
            if(!req.body.user || !req.body.value) {
                return res.status(400).json(this.apiResponse(400, "Corpo de requisição inválido"))
            }

            const { user , value } = req.body as BackendRequest<Task>

            if(!(user.name && user.email && user.token)) {
                return res.status(400).json(this.apiResponse(400, "Usuário não informado"))
            }

            if(!(value.name && value.date && value.description && value.hourCreate)){
                return res.status(400).json(this.apiResponse(400, "Tarefa inválida ou não informada"))
            }

            const getUser = await this.query.select(`SELECT id FROM users where email = '${user.email}' AND name = '${user.name}'`) as User[]

            console.log(value)

            if(!getUser || getUser.length === 0 || !this.verifyTokenIsValid(user.token)) {
                return res.status(400).json(this.apiResponse(400, "Usuário inválido ou não autorizado"))
            }

            value.userId = getUser[0].id as number

            this.createTaskSql(value)

            return res.status(200).json(this.apiResponse(200, "Tarefa criada"))
        } catch(ex){
            console.log(ex)
            return res.status(500).json(this.apiResponse(500, `Error ${ex}`))
        }
    }

    public getTaskByUserId = async (req: Request, res: Response) => {
        try{
            if(!req.body.user || !req.body.value) {
                return res.status(400).json(this.apiResponse(400, "Corpo de requisição inválido"))
            }

            const { user , value } = req.body as BackendRequest<Task>

            if(!(user.name && user.email && user.token)) {
                return res.status(400).json(this.apiResponse(400, "Usuário não informado"))
            }

            if(!this.verifyTokenIsValid(user.token)){
                return res.status(400).json(this.apiResponse(400, "Acesso negado"))
            }

            if(!(value.userId)) {
                return res.status(400).json(this.apiResponse(400, "Obrigatório informar o userId"))
            }

            const getTasks = await this.query.select(`SELECT * FROM task where userId = ${value.userId}`) as Task[]

            if(!getTasks || getTasks.length === 0) {
                return res.status(400).json(this.apiResponse(400, "Tarefa não encontrada"))
            }

            return res.status(200).json(this.apiResponse(200, "Tarefa encontrada", getTasks))
        } catch(ex) {
            console.log(ex)
            return res.status(500).json(this.apiResponse(500, `Error ${ex}`))
        }
    }

    private createTaskSql = (task: Task) => {
        this.query.insert(` INSERT INTO 
            task(name, description, date, hourCreate, userId) VALUES 
            ('${task.name}','${task.description}','${task.date}','${task.hourCreate}','${task.userId}')`, 
        null)
    }
}
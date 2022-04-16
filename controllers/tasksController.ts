import { Task } from './interfaces/tasks.model';
import { ControllerHttp } from './controllerHttp';
import { BackendRequest } from '@interfaces/backendRequest.mode'
import { Request, Response } from "express";



export class TaskController extends ControllerHttp {

    constructor(){
        super();
    }

    public createTask = (req: Request, res: Response) => {
        try{
            if(!req.body.user || !req.body.value) {
                return res.status(400).json(this.apiResponse(400, "Corpo de requisição inválido"))
            }

            const { user , value } = req.body as BackendRequest<Task>

            if(!(user.name && user.email && user.token)) {
                return res.status(400).json(this.apiResponse(400, "Usuário não informado"))
            }

            if(!this.verifyTokenIsValid(user.token)) {
                return res.status(400).json(this.apiResponse(400, "Usuário inválido ou não autorizado"))
            }

            if(!(value.name && value.date && value.description && value.hourCreate)){
                return res.status(400).json(this.apiResponse(400, "Tarefa não informada"))
            }

            return res.status(200).json(this.apiResponse(200, "Tarefa criada"))
        } catch(ex){
            console.log(ex)
            return res.status(500).json(this.apiResponse(500, `Error ${ex}`))
        }
    }
}
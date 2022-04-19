import { Query } from './../services/query.service';
import { ControllerHttp } from './controllerHttp';
import { User } from '@interfaces/auth-user.model';
import { NextFunction, Request, Response } from 'Express';

export class Auth extends ControllerHttp {

    constructor(){
        super();
    }

    public loginUser = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const bodyRequest: User = req.body;

            if(!(bodyRequest.name && bodyRequest.email && bodyRequest.password)) {
                return res.status(400).json(this.apiResponse(400, "Valores inválidos"))
            }

            if(bodyRequest.password != bodyRequest.confirmPassword) {
                return res.status(400).json(this.apiResponse(400, "Senha e confirmar senha diferentes"))
            }

            const findUser = await this.query.select(`SELECT * FROM users where email = '${bodyRequest.email}' AND name = '${bodyRequest.name}'`) as User[]
            
            if(findUser.length > 0){
                findUser[0].token = this.getToken(bodyRequest.name, bodyRequest.email)
                return res.status(200).json(this.apiResponse(200, "Usuário encontrado", findUser[0]))
            }

            return res.status(400).json(this.apiResponse(400, "Usuário inválido ou não encontrado"))
        } catch(ex) {
            next(ex)
        }
    }
    

    public registerUser = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const bodyRequest: User = req.body;
        
            if(!(bodyRequest.name && bodyRequest.email && bodyRequest.password)) {
                return res.status(400).json(this.apiResponse(400, "Valores inválidos"))
            }

            let rowDB: Array<User> = await this.query.select(`SELECT * FROM users where email = '${bodyRequest.email}' AND name = '${bodyRequest.name}'`) as User[]

            console.log(rowDB)

            if(rowDB.length > 0){
                return res.status(200).json(this.apiResponse(200, "Este usuário já existe"))
            }

            this.query.insert('INSERT INTO users SET ?', bodyRequest)
    
            return res.status(200).json(this.apiResponse(200, "Usuário adicionado com sucesso"))
        } catch(ex){
            next(ex)
        }
    }
}
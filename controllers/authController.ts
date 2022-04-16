import { ControllerHttp } from './controllerHttp';
import { User } from '@interfaces/auth-user.model';
import { NextFunction, Request, Response } from 'Express';

let usuarios: User[] = [
    {
        confirmPassword: '123',
        password: '123',
        email: 'raphael@email.com',
        name: 'raphael'
    }
]

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

            const findUser = usuarios.filter(value => value.name == bodyRequest.name && value.email == bodyRequest.email)
            
            if(findUser.length > 0){
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
    
            const findUser = usuarios.filter(value => value.name == bodyRequest.name && value.email == bodyRequest.email)
            
            if(findUser.length > 0) {
                return res.status(200).json(this.apiResponse(400, "Usuário já cadastrado"))
            }
    
            bodyRequest.token = this.getToken(bodyRequest.name, bodyRequest.email);
            usuarios.push(bodyRequest)
    
            return res.status(200).json(this.apiResponse(200, "Usuário adicionado com sucesso"))
        } catch(ex){
            next(ex)
        }
    }
}
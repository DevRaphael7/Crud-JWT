import { BackendResponse } from './interfaces/backendResponse.model';
import { User } from './interfaces/auth-user.model';
import { NextFunction, Request, Response } from 'Express';

let usuarios: User[] = []

//Recuperar usuário
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const bodyRequest: User = req.body;

        let responseBack: BackendResponse;

        if(!(bodyRequest.name && bodyRequest.email && bodyRequest.password)) {

            responseBack = {
                statusCode: 400,
                data: {
                    message: "Valores inválidos!",
                    data: null
                }
            }

            return res.status(400).json(responseBack)
        }

        if(bodyRequest.password != bodyRequest.confirmPassword) {
            responseBack = {
                statusCode: 400,
                data: {
                    message: "Senha e confirmar senha diferentes",
                    data: null
                }
            }

            return res.status(400).json(responseBack)
        }

        const findUser = usuarios.filter(value => 
            value.name == bodyRequest.name && value.email == bodyRequest.email)
        
        if(findUser.length > 0){
            responseBack = {
                statusCode: 200,
                data: {
                    data: bodyRequest,
                    message: "Usuário encontrado!"
                }
            }
    
            return res.status(200).json(responseBack)
        }

        responseBack = {
            data: {
                message: "Usuário inválido ou não existe",
                data: null
            },
            statusCode: 400
        }

        res.status(400).json(responseBack)

    } catch(ex) {
        next(ex)
    }
}

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const bodyRequest: User = req.body;
        let responseBack: BackendResponse;
    
        if(!(bodyRequest.name && bodyRequest.email && bodyRequest.password)) {
            responseBack = {
                statusCode: 400,
                data: {
                    message: "Valores inválidos!",
                    data: null
                }
            }

            return res.status(400).json(responseBack)
        }

        const findUser = usuarios.filter(value => 
            value.name == bodyRequest.name && value.email == bodyRequest.email)
        
        if(findUser.length > 0){
            responseBack = {
                statusCode: 400,
                data: {
                    data: null,
                    message: "Usuário já cadastrado"
                }
            }
    
            return res.status(200).json(responseBack)
        }
        
        

        usuarios.push(bodyRequest)

        responseBack = {
            statusCode: 200,
            data: {
                message: "Usuário adicionado com sucesso!",
                data: null
            }
        }

        res.status(200).json(responseBack)
    } catch(ex){
        next(ex)
    }
}



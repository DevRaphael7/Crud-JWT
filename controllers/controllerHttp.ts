import { Query } from './../services/query.service';
import { BackendResponse } from '@interfaces/backendResponse.model';
import jwt from 'jsonwebtoken';

export class ControllerHttp {

    public query: Query = new Query();

    public apiResponse(statusCode: number, message: string, data: any = null): BackendResponse {
        return {
            statusCode: statusCode,
            data: {
                value: data,
                message: message
            }
        }
    }

    public getToken(name: string, email: string) {
        return jwt.sign(
            { 
                user_id: name, 
                email: email 
            },
            process.env.TOKEN_KEY as string,
            {
                expiresIn: "1h"
            }
        );
    }

    public verifyTokenIsValid(token: string | undefined): boolean {
        if(!token) return false;
        if(token.split('Bearer').length != 2) return false;

        const bearerToken = token.split('Bearer')[1].replace(/\s+/g, '')
        console.log(bearerToken)
        let tokenValid: boolean = true
        jwt.verify(bearerToken, process.env.TOKEN_KEY as string, (error, _) => {
            if(error){
                tokenValid = false;
            }
        })
        return tokenValid
    }
}
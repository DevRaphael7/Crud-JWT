import { BackendResponse } from '@interfaces/backendResponse.model';
import jwt from 'jsonwebtoken';

export class ControllerHttp {

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

    public verifyTokenIsValid(token: string): boolean {
        let tokenValid: boolean = true
        jwt.verify(token, process.env.TOKEN_KEY as string, (error, _) => {
            if(error){
                tokenValid = false;
            }
        })
        return tokenValid
    }
}
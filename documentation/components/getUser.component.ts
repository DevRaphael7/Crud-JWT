export const getUserRequest = {
    properties: {
        name: {
            type: "string",
            description: "Name of user",
            example: "Raphael Ramalho"
        },
        email: {
            type: "string",
            description: "Email of user",
            example: "raphael@email.com"
        },
        password: {
            type: "string",
            description: "Password of user",
            example: "159"
        },
        confirmPassword: {
            type: "string",
            example: "159"
        }
    }
}

export const getUser200Response = {
    properties: {
        "statusCode": {
            type: "number",
            example: 200
        },
        "data": {
            type: "object",
            example: {
                "value": {
                    "name": "Raphael Ramalho",
                    "password": "190",
                    "email": "raphael@email.com",
                    "id": 43,
                    "token": "xxxxxxxx"
                },
                "message": "Usuário encontrado"
            }
        }
    }
}
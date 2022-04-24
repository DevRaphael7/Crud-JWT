export const registerUser200Response = {
    properties: {
        "statusCode": {
            type: "number",
            example: 200
        },
        "data": {
            type: "object",
            example: {
                "value": "null",
                "message": "Este usuário já existe"
            }
        }
    }
}
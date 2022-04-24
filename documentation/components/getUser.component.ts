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

export const getUserReqExample = {
    "value": {
        name: "Raphael Ramalho",
        email: "raphael@email.com",
        password: "190",
        confirmPassword: "190"
    }
}
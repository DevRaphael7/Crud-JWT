export const createTask = {
    properties: {
        user: {
            type: "object",
            example: {
                "name": "Raphael Ramalho",
                "email": "raphael@email.com"
            }
        },
        value: {
            type: "object",
            example: {
                "name": "Ler Harry Potter",
                "description": "Ler livros de filosofia"
            }
        }
    }
}
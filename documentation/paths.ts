export const paths = {
        "/auth/getUser": {
            "post": {
                summary: "LoginUser",
                description: "Login e autenticação do usuário",
                tags: ["Auth API"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/GETUSER/getUserReq"
                            },
                            examples: {
                                "getUser": {
                                    "value": {
                                        name: "Raphael Ramalho",
                                        email: "raphael@email.com",
                                        password: "190",
                                        confirmPassword: "190"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    401: {
                        description: "Usuário inválido ou não encontrado"
                    },
                    400: {
                        description: "Senha e confirmar senha diferentes"
                    },
                    200: {
                        description: "Usuário encontrado",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/GETUSER/getUser200Response"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/auth/registerUser": {
            "post": {
                summary: "Register user",
                description: "Cadastro de usuário",
                tags: ["Auth API"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/GETUSER/getUserReq"
                            },
                            examples: {
                                "getUser": {
                                    "value": {
                                        name: "Raphael Ramalho",
                                        email: "raphael@email.com",
                                        password: "190"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    401: {
                        description: "Usuário inválido ou não encontrado"
                    },
                    400: {
                        description: "Senha e confirmar senha diferentes"
                    },
                    200: {
                        description: "Este usuário já existe",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/REGISTERUSER/registerUser200Response"
                                }
                            }
                        }
                    }
                }
            }
        },
        "tasks/createTask": {
            "post": {
                summary: "Create simple task",
                description: "Criação de tarefas",
                tags: ["Tasks"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CREATETASKS/createTaskReq"
                            },
                            examples: {
                                "createTask": {
                                    "value": {
                                        "user": {
                                            "name": "Raphael Ramalho",
                                            "email": "raphael@email.com"
                                        },
                                        "value": {
                                            "name": "Ler Harry Potter",
                                            "description": "Ler livros de filosofia"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        }
}
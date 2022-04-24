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
                                $ref: "#/components/schemas/getUserReq"
                            },
                            examples: {
                                "getUser": {
                                    $ref: "#/components/schemas/getUserReqExample"
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
                                    type: "object",
                                    "items": {
                                        name: "Raphael Ramalho",
                                        email: "raphael@email.com",
                                        password: "190",
                                        confirmPassword: "190"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/auth/registerUse": {
            "post": {
                summary: "Register user",
                description: "Cadastro de usuário",
                tags: ["Auth API"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/getUserReq"
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
                                    $ref: "#/components/schemas/getUserReqExample"
                                }
                            }
                        }
                    }
                }
            }
        },
}
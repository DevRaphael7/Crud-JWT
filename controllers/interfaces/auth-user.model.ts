export interface User {
    id?:number;
    name: string;
    password: string;
    confirmPassword?: string;
    email: string;
    token?: string;
}
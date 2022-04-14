export interface User {
    name: string;
    password: string;
    confirmPassword: string;
    email: string;
    token?: string;
}
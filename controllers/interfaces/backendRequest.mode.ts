export interface BackendRequest<ValueRequest> {
    user: UserData,
    value: ValueRequest
}

interface UserData {
    name: string;
    email: string;
    token: string;
}
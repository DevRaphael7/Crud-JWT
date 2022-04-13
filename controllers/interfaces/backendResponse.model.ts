export interface BackendResponse {
    data: Data;
    statusCode: number;
}

interface Data {
    message: string;
    data: any;
}
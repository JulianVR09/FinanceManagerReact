export interface ApiError {
    code: number;
    message: string;
    timestamp?: string;
    path?: string;
}
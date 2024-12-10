export interface LoginResponse {
    code: number;
    message: string;
    token: string;
    data: {
        accessToken: string;
        id: string;
        name: string;
        email: string;
    };
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SingupRequest {
    name: string;
    email: string;
    password: string;
}

export interface SingupResponse {
    code: number;
    message: string;
    data: {
        id: string;
        name: string;
        email: string;
    };
}

export interface AuthChildrenProps {
    children: React.ReactNode;
}

export interface AuthContextProps {
    auth: Boolean;
    signOut: () => Promise<void>;
    saveSessionInfo: (id: string, token: string, name: string) => Promise<void>;
    name: string | null;
    idUser: string | null;
    getToken: () => Promise<string | null>;
    getId: () => string | null;
}
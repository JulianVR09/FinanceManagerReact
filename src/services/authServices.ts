import apiClient from "../backend/apiClient";
import { ApiError } from "../interfaces/apiError.interface";
import { LoginRequest, LoginResponse, SingupRequest, SingupResponse } from "../interfaces/auth.interface";
import { handleApiError } from "../utils/handlerError";

const authService = {
    login: async (data: LoginRequest): Promise<LoginResponse | ApiError> => {
        try {
            const response = await apiClient.post<LoginResponse>('/auth/login', data);
            return response.data;
        } catch (error) {
            const apiError = handleApiError(error)
            return apiError
        }
    },

    register: async (data: SingupRequest): Promise<SingupResponse | ApiError> => {
        try {
            const response = await apiClient.post<SingupResponse>('/auth/register', data);
            return response.data;
        } catch (error) {
            const apiError = handleApiError(error)
            return apiError
        }
    },
};

export default authService;
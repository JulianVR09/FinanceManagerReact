import { createContext, useContext, useState } from "react";
import { AuthChildrenProps, AuthContextProps } from "../interfaces/auth.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthContext = createContext<AuthContextProps>({
    auth: false,
    signOut: async () => {},
    saveSessionInfo: async () => {},
    name: null,
    idUser: null,
    getToken: async () => null,
    getId: () => null,
});

export const AuthProvider = ({children}: AuthChildrenProps) => {
    const [idUser, setIdUser] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [auth, setAuth] = useState(false);

    const saveSessionInfo = async (id: string, name: string, token: string) => {
        setIdUser(id);
        setAuth(true);
        setName(name);

        console.log('Saving session info:', id, name, token);
        await AsyncStorage.setItem('accessToken', token);
        console.log('session saved');

        return;
    };

    const signOut = async () => {
        setAuth(false);

        await AsyncStorage.removeItem('accessToken');

        return;
    };

    const getId = () => {
        return idUser;
    }

    const getToken = async () => {
        return (await AsyncStorage.getItem('accessToken')) as string;
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                signOut,
                saveSessionInfo,
                name,
                idUser,
                getToken,
                getId,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
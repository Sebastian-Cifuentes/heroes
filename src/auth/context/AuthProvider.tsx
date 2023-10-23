import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
    const user: any = JSON.parse(localStorage.getItem('user') as any);

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    const login = (name: string) => {
        const user = {
            id: 1,
            name
        }
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
            payload: {}
        };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            //methods
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}
import { types } from '../types/types';

export const authReducer = (state: any, action: any) => {

    const actions = {
        [types.login]: login,
        [types.logout]: logout
    }

    const r = actions[action.type](state, action);

    if (r) {
        return r;
    }

    return state;

}

// los reducers no deben de hacer proceso terceros
// solamente deben recibir la data, hacer la acción y devolverla
const login = (state: any, action: any) => {
    return {
        ...state,
        logged: true,
        user: action.payload
    };
}

const logout = () => {
    return {
        logged: false
    };
}
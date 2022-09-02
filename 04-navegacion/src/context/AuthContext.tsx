import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


//definir como luce, que informacion tendre aqui
export interface AuthState {
    isLogeedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//estado inial
export const authInitialState: AuthState = {
    isLogeedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

//la usaremos para decirle a react como luce y que expone el contex
export interface AuthContexProps {
    authState: AuthState;
    sigIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (userName: string) => void;
    
}

//crear contexto
export const AuthContext = createContext({} as AuthContexProps);


//Componenet proveedor del estado
export const AuthProvider = ({ children } : any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const sigIn = () => {
        dispatch({ type: 'SigIn' });
    }

    const changeFavIcon = ( iconName: string ) => {
        dispatch({ type: 'ChangeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'Logout'});
    }

    const changeUserName = (userName: string) => {
        dispatch ({ type: 'ChangeUserName', payload: userName })
    }


    return(
        <AuthContext.Provider value={{ 
            authState,
            sigIn,
            logout,
            changeFavIcon,
            changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}

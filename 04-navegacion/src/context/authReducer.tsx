import { AuthState } from "./AuthContext";

type AuthAction = 
   | { type: 'SigIn' }
   | { type: 'Logout'}
   | { type: 'ChangeFavIcon', payload: string }
   | { type: 'ChangeUserName', payload: string }; 



//genera estado
export const authReducer = ( state : AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SigIn':
            return{
                ...state,
                isLogeedIn: true,
                userName: 'no-username-yet'
            }
        case 'ChangeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'ChangeUserName':
            return {
                ...state,
                userName: action.payload
                }
        case 'Logout':
            return {
                ...state,
                isLogeedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        default:
            return state;
    }
}
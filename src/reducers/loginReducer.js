import { typeslogin } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typeslogin.login:

        return{
            id: action.payload.id,
            name: action.payload.displayname
        }
        case typeslogin.logout:
            return [] 
        default:
          return state;
    }
}
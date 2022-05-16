import { typeslogin } from "../types/types";


export const registerReducer = (state = {}, action) => {
  switch (action.type) {
      case typeslogin.registerformik:

      return{
          email: action.payload.email,
          password: action.payload.password,
          name: action.payload.name
      }
      default:
          return state;
  }
}
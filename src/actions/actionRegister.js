import { types } from "../types/types"

export const lregisterSincrono = (email, password) => {
    return {
        type: types.register,
        payload: {
            email,
            password
        }
    }
  }
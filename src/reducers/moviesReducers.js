import { typesMovie } from "../types/typesMovie"


const initialState = {
    movies: []
}

export const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesMovie.add:
            return {
                movies: [action.payload]
            }

        case typesMovie.list:
            return {
                movies: [...action.payload]
            }

        case typesMovie.delete:
            return {
                movies: state.movies.filter(p => p.titulo !== action.payload)
            }
        case typesMovie.edit:
            return {
                ...state
            }
        case typesMovie.search:
            return {
                movies: action.payload
            }
        default:
            return state
    }
}
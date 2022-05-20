import '@testing-library/jest-dom'
import { moviesReducers } from '../../reducers/moviesReducers'
import { typesMovie } from '../../types/typesMovie'

describe('Pruebas en movieReducer', () => {
    test('Agregar Estacion',()=>{
        const initState = {
            movies: []
        }
        const action ={
            type: typesMovie.add,
            payload: {
                titulo: 'prueba1',
                foto: 'prueba1',
                descripcion: 'prueba1',
                anio:'prueba1',
                genero: 'prueba1',
                duracion: 'prueba1',
                valoracion: 'prueba1'
            }
        }
        const state = moviesReducers(initState, action);
        expect(state).toEqual({
            movies: [{
                titulo: 'prueba1',
                foto: 'prueba1',
                descripcion: 'prueba1',
                anio:'prueba1',
                genero: 'prueba1',
                duracion: 'prueba1',
                valoracion: 'prueba1'
            }]
        })
    })
    test( 'Editar las peliculas', () => {
        const initState = {
            movies: []
        }
        const action ={
            type: typesMovie.edit,
            payload: {
                titulo: 'prueba2',
            }
        }
        const state = moviesReducers(initState, action)
        expect(state).toEqual({
            ...state
        })
    })

    test('Borrar Pelicula',()=>{
        const initState = {
            movies: []
        }
        const action ={
            type: typesMovie.delete,
            payload: {
                titulo: 'Prueba3',
            }
        }
        const state = moviesReducers(initState, action)
        expect(state).toEqual({
           movies: state.movies.filter(p => p.titulo !== action.payload)
        })                                      
    })

    test('State Default',()=>{
        const initState={
            movies: []
        }
        const action ={
            type: typesMovie.OtroType,
        }
        const state = moviesReducers(initState, action)
        expect(state).toEqual(initState)
    })
})


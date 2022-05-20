import '@testing-library/jest-dom'
import { loginReducer } from '../../reducers/loginReducer';
import { typeslogin } from '../../types/types';

describe('Pruebas en loginReducer', () => {
    test('debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: typeslogin.login,
            payload: {
                id: 'prueba',
                displayname: 'Bethsy'
            }
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual({
            id: 'prueba',
            name: 'Bethsy'
        })
    })   
    test('Cerrar sesion logout', () => {
        const initState = {
            id: 'prueba',
            name: 'Bethsy'
        }

        const action = {
            type: typeslogin.logout,
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual([])
    })

    test('estado por defecto', ()=> {
        const initState = {
            id: 'prueba',
            name: 'Bethsy'
        }
        const action = {
            type: typeslogin.OtroType,
        }
        const state = loginReducer(initState, action);
        expect (state).toEqual(initState)
    }) 
})
import '@testing-library/jest-dom'
import { registerReducer } from '../../reducers/registerReducer'
import { typeslogin } from '../../types/types'

describe('Pruebas en registerReducer', () => {
    test('debe realizar el registro', () => {
        const initState = {}

        const action = {
            type: typeslogin.registerformik,
            payload: {
                email: 'bethsyfalcon@gmail.com',
                password: '123456',
                name: 'bethsy'
            }
        }
        const state = registerReducer(initState, action);
        expect(state).toEqual({
                email: 'bethsyfalcon@gmail.com',
                password: '123456',
                name: 'bethsy'
        })
    })
    
})
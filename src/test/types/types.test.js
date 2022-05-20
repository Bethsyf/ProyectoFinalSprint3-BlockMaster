import '@testing-library/jest-dom'
import { typeslogin } from '../../types/types'
import { typesMovie } from '../../types/typesMovie'


describe('Verificar types', () => {
    test('Comparar el objeto de los types con el archivo typeslogin', () => {
        expect(typeslogin).toEqual({
            login: 'login',
            register: 'register',
            logout: 'logout'  
        })
    })
    test('Comparar el objeto de los types con el archivo typesMovie', () => {
        expect(typesMovie).toEqual({
            add: 'add',
            list: 'list',
            delete: 'delete',
            edit: 'edit',
            search : 'search' 
        })
    })
})
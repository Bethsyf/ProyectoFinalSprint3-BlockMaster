import '@testing-library/jest-dom'
import { loginSincrono, logout } from '../../actions/actionLogin';
import { typeslogin } from '../../types/types';


describe('Verificar las acciones del Login', () => {
    test('Validar el login sincronico', () => {
        const id = 'Prueba';
        const displayname = 'Bethsy';
        const loginAction = loginSincrono(id, displayname);

        expect(loginAction).toEqual({
            type: typeslogin.login,
            payload: {
                id,
                displayname
            }
        })
    })

    test('Cerrar sesion', () => {
        const id = 'Prueba';
        const displayname = 'Bethsy';

        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: typeslogin.logout,
        })
    })
})
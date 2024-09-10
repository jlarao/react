import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('test reducer', () => {
    
    test('should return the initial value', () => {  
        const state = authReducer( {logged : false}, {} );
        expect(state).toEqual({logged : false});        
    });

    test('should login', () => {
        const action = {
            type : types.login,
            payload : {
                id : 123,
                name : 'Fernando'
            }
        }
        const state = authReducer( {logged : false}, action );

        expect(state).toEqual({logged : true, user : action.payload});
    });

    test('should logout', () => {
        const state = {
            logged : true,
            user : {
                id : 123,
                name : 'Fernando'
            }
        }
        const action = {
            type : types.logout
        }
        
        const newstate = authReducer(state, action);

        expect(newstate).toEqual({logged : false});
    })


});
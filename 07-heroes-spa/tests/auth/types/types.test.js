import { types } from "../../../src/auth/types/types";

describe('test types', () => {
    
    test('should return the initial value', () => {  
        console.log(types);
        expect(types.login).toBe('[Auth] Login');
        expect(types.logout).toBe('[Auth] Logout');
    });

})
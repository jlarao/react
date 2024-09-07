import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/UseForm";


describe('use form test', () => {

    test('should return the initial value', () => {
        const initialForm = {
            name: 'strider',
            email: 'test@gmail.com'
        }
        const { result } = renderHook(()=> useForm(initialForm));
        // const { formState, onInputChange, onResetFrom } = result.current;
        // expect(formState).toEqual(initialForm);

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetFrom: expect.any(Function),
        });
    })

    test('debe de cambiar el valor del formulario', () => {
        //montar el hook
        const initialForm = {
            name: 'strider',
            email: 'test@gmail.com'
        };
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;
        const newValue =  'strider2';
        //on input change act, mandar el evento
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });
        //expect
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('debe de resetear el formulario', () => {
        //montar el hook
        const initialForm = {
            name: 'strider',
            email: 'test@gmail.com'
        };
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange , onResetFrom} = result.current;
        const newValue =  'strider2';
        const oldValue = initialForm.name;
        //on input change act, mandar el evento
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetFrom();
        });
        //expect
        expect(result.current.name).toBe(oldValue);
        expect(result.current.formState.name).toBe(oldValue);
    });
})